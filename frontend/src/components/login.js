import "../css/login.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/bookClubActions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
	// const [ errorMessage, setErrorMessage ] = useState(null)

	const state = useSelector((state) => state.bookClubReducer);
	const errorMessage = useSelector((state) => state.bookClubReducer.error);
	const dispatch = useDispatch();

	const handleLogin = async (e) => {
		e.preventDefault();
		// setErrorMessage( null )

		const formData = new FormData(e.target);
		const username = formData.get("username");
		const password = formData.get("password");

		// console.log( username, password )

		try {
			await dispatch(login({ username, password }));
		} catch (error) {
			console.log("error", error);
			// setErrorMessage( error.message )
		}
	};

	return (
		<div className="login-container">
			<h2 className="section-title">Login</h2>

			<div className="login-form-container">
				<p className="error-message">{errorMessage}</p>

				<form className="login-form" onSubmit={handleLogin}>
					<label className="login-form-label">
						Username:
						<input title="username" name="username" required />
					</label>
					<label className="login-form-label">
						Password:
						<input name="password" type="password" required />
					</label>

					<button type="submit" className="login-button">
						Login
					</button>
				</form>

				<div>
					<p>Don't have an account yet?</p>
					<Link to="/register">Register</Link>
				</div>
			</div>
		</div>
	);
}
