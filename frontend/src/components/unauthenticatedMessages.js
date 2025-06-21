import { useEffect, useState } from "react";
import axios from "axios";
import { Edit2, Trash2, Save, Plus, X } from "react-feather";

import "../css/unauthenticatedMessages.css";

export default function UnauthenticatedMessages() {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);
	const [editing, setEditing] = useState(false);
	const [editingMessageId, setEditingMessageId] = useState(null);
	const [editingMessageContent, setEditingMessageContent] = useState(null);
	const [loading, setLoading] = useState(true);

	// FORM SUBMIT
	const submitNewMessageForm = async (event) => {
		event.preventDefault();
		setErrorMessage(null);

		try {
			await axios.post("http://localhost:3001/unauthenticatedMessages", { text: message }).then((response) => {
				if (response.status === 201) {
					setMessage("");
					getMessages();
					setEditing(false);
					setEditingMessageId(null);
					setEditingMessageContent(null);
				}
			});
		} catch (error) {
			const errorMessage = error?.response?.data?.message;
			if (errorMessage) {
				setErrorMessage(errorMessage);
			} else {
				setErrorMessage(error.message);
			}
			console.log(error);
		}
	};

	// FORM CHANGE
	const handleNewMessageChange = (e) => {
		setMessage(e.target.value);
	};

	// GET MESSAGES
	async function getMessages() {
		try {
			await axios.get("http://localhost:3001/unauthenticatedMessages").then((response) => {
				let messageData = response.data;
				if (messageData && messageData.length > 0) {
					setMessages(messageData);
				}
			});
		} catch (error) {
			const errorMessage = error?.response?.data?.message;
			if (errorMessage) {
				setErrorMessage(errorMessage);
			} else {
				setErrorMessage(error.message);
			}
			console.log(error);
		}
	}

	const editMessage = (message) => {
		console.log(message.id);
		setEditing(true);
		setEditingMessageId(message.id);
		setEditingMessageContent(message.text);
	};

	const handleEditMessageChange = (e) => {
		setEditingMessageContent(e.target.value);
	};

	const saveMessage = async (event) => {
		event.preventDefault();
		setErrorMessage(null);

		try {
			await axios
				.put(`http://localhost:3001/unauthenticatedMessages/${editingMessageId}`, {
					text: editingMessageContent,
				})
				.then((response) => {
					if (response.status === 200) {
						setEditing(false);
						setEditingMessageId(null);
						setEditingMessageContent(null);
						getMessages();
					}
				});
		} catch (error) {
			const errorMessage = error?.response?.data?.message;
			if (errorMessage) {
				setErrorMessage(errorMessage);
			} else {
				setErrorMessage(error.message);
			}
			console.log(error);
		}
	};

	const clearEdits = () => {
		setEditing(false);
		setEditingMessageId(null);
		setEditingMessageContent(null);
		setErrorMessage(null);
	};

	const deleteMessage = async (id) => {
		try {
			await axios.delete(`http://localhost:3001/unauthenticatedMessages/${id}`).then((response) => {
				if (response.status === 200) {
					getMessages();
				}
			});
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		try {
			getMessages();
		} catch (error) {
			console.log("Error loading data: ", error);
		}

		setLoading(false);
	}, []);

	return (
		<div className="unauthenticated-messages-container">
			<div className="app-description">
				<h2 className="section-title">Unauthenticated Messages</h2>
				<p>Add a message to the database! no need to be authenticated here</p>
			</div>

			<div className="error-container">
				{errorMessage ? (
					<p>
						<strong>{errorMessage}</strong>
					</p>
				) : null}
			</div>

			<form className="add-message-form" onSubmit={submitNewMessageForm}>
				<label htmlFor="text">
					New Message:
					{/* New Message: <input id="text" value={message} onChange={handleNewMessageChange} /> */}
				</label>
				<textarea id="text" value={message} onChange={handleNewMessageChange} />
				<button type="submit">
					<Plus />
				</button>
			</form>

			<div className="messages-container">
				{loading ? (
					<div>
						<p>Loading</p>
					</div>
				) : messages.length > 0 ? (
					<div className="messages-inner-container">
						{messages.map((message) => {
							if (editing && editingMessageId === message.id && errorMessage === null) {
								return (
									<div key={message.id} className="message">
										<form className="message-main-content" onChange={handleEditMessageChange}>
											<p>
												<strong>{message.id}</strong>
											</p>
											<textarea value={editingMessageContent} />
											<Save className="message-action save" type="submit" onClick={saveMessage} />
											<X className="message-action cancel" type="button" onClick={clearEdits} />
										</form>
										<p className="message-created-at">
											<strong>Created: {message.created_at}</strong>
										</p>
									</div>
								);
							} else if (editing && editingMessageId === message.id && errorMessage !== null) {
								return (
									<div key={message.id} className="message error">
										<form className="message-main-content" onChange={handleEditMessageChange}>
											<p>
												<strong>{message.id}</strong>
											</p>
											<textarea value={editingMessageContent} />
											<Save className="message-action save" type="submit" onClick={saveMessage} />
											<X className="message-action cancel" type="button" onClick={clearEdits} />
										</form>
										<p className="message-created-at">
											<strong>Created: {message.created_at}</strong>
										</p>
									</div>
								);
							}

							return (
								<div key={message.id} className="message">
									<div className="message-main-content">
										<p>
											<strong>{message.id}</strong>
										</p>
										<textarea value={message.text} readOnly disabled />
										<Edit2 className="message-action edit" onClick={() => editMessage(message)} />
										<Trash2
											className="message-action delete"
											onClick={() => deleteMessage(message.id)}
										/>
									</div>
									<p className="message-created-at">
										<strong>Created: {message.created_at}</strong>
									</p>
								</div>
							);
						})}
					</div>
				) : (
					<div>
						<p>No Messages</p>
					</div>
				)}
			</div>
		</div>
	);
}
