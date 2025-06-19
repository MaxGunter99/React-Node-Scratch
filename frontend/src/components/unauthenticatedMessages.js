import { useEffect, useState } from "react";
import axios from "axios";
import { Edit2, Trash2 } from "react-feather";

import "../css/unauthenticatedMessages.css";

export default function UnauthenticatedMessages() {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState(null);
	const [editing, setEditing] = useState(false);
	const [loading, setLoading] = useState(true);

	// FORM SUBMIT
	const submitForm = async (event) => {
		event.preventDefault();
		setErrorMessage(null);

		try {
			await axios
				.post("http://localhost:3001/unauthenticatedMessages", { message: message })
				.then((response) => {
					if (response.status === 201) {
						setMessage("");
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

	// FORM CHANGE
	const handleChange = (e) => {
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

	const editMessage = (id) => {
		console.log(id);
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
			<h2>Unauthenticated Messages</h2>
			<p>Add a message to the database! no need to be authenticated here</p>

			<div className="error-container">{errorMessage ? <p>{errorMessage}</p> : null}</div>

			<form className="add-message-form" onSubmit={submitForm}>
				<label>
					New Message: <textarea id="text" value={message} onChange={handleChange} />
					{/* New Message: <input id="text" value={message} onChange={handleChange} /> */}
				</label>
				<button type="submit">Add</button>
			</form>

			<div className="messages-container">
				{loading ? (
					<div>
						<p>Loading</p>
					</div>
				) : messages.length > 0 ? (
					<div>
						{messages.map((message) => {
							return (
								<div key={message.id} className="message">
									<div className="message-main-content">
										<p>
											<strong>{message.id}</strong>
										</p>
										<textarea value={message.text} readOnly />
										{/* <p>{message.text}</p> */}
										<Edit2
											className="message-action edit"
											onClick={() => editMessage(message.id)}
										/>
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
