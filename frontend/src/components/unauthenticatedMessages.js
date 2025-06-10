import { useEffect, useState } from "react";
import axios from "axios";

import "../css/unauthenticatedMessages.css"

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

            await axios.post(
                "http://localhost:3001/unauthenticatedMessages", { message: message }
            ).then(
                response => {
                    if ( response.status === 201 ) {
                        setMessage("");
                        getMessages();
                    }
                }
            ).catch( err => {
                setErrorMessage( err.message );
                console.log( "Error posting data: ", err );
            })

        } catch ( error ) {
            console.log( error )
        }
	};

	// FORM CHANGE
	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	// GET MESSAGES
    async function getMessages() {
        await axios.get("http://localhost:3001/unauthenticatedMessages").then((response) => {
            let messageData = response.data;
            if (messageData && messageData.length > 0) {
                setMessages(messageData);
            }
        });
    }

	useEffect(() => {
        try {
            getMessages();

        } catch ( error ) {
            console.log( "Error loading data: ", error )
        }

		setLoading(false);
	}, []);

	return (
		<div className="unauthenticated-messages-container">
			<h2>Unauthenticated Messages</h2>
			<p>Add a message to the database! no need to be authenticated here</p>

			<form className="add-message-form" onSubmit={submitForm}>
				<label>
					Text:
					<textarea id="text" value={message} onChange={handleChange} />
				</label>
				<button type="submit">Add</button>
			</form>

            <div className="error-container">
                {errorMessage ? (
                    <p>{errorMessage}</p>
                ) : null }
            </div>

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
                                        <p><strong>{message.id}</strong></p>
                                        <textarea value={message.text} readOnly />
                                    </div>
									<p>Created: {message.created_at}</p>
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
