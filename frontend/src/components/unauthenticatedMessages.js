import { useEffect, useState } from "react";
import axios from "axios";
import { Edit2, Trash2, Save, Plus } from "react-feather";

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
			await axios
				.post("http://localhost:3001/unauthenticatedMessages", { message: message })
				.then((response) => {
					if (response.status === 201) {
						setMessage("");
						getMessages();
						setEditing(false);
						setEditingMessageId(null);
						setEditingMessageContent(null);
					}
				})
				.catch((err) => {
					setErrorMessage(err.message);
					console.log("Error posting data: ", err);
				});
		} catch (error) {
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
			setErrorMessage(error.message);
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
				})
				.catch((err) => {
					setErrorMessage(err.message);
					console.log("Error posting data: ", err);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const deleteMessage = async (id) => {
		try {
			await axios.delete(`http://localhost:3001/unauthenticatedMessages/${id}`).then((response) => {
				if (response.status == 200) {
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

			<div className="error-container">{errorMessage ? <p>{errorMessage}</p> : null}</div>

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
							if (editing && editingMessageId === message.id) {
								return (
									<div key={message.id} className="message">
										<form className="message-main-content" onChange={handleEditMessageChange}>
											<p>
												<strong>{message.id}</strong>
											</p>
											<textarea value={editingMessageContent} />
											{/* <p>{message.text}</p> */}
											<Save className="message-action save" type="submit" onClick={saveMessage} />
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
										{/* <p>{message.text}</p> */}
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
