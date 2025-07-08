import "../css/register.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/bookClubActions";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Register() {
	const state = useSelector((state) => state.bookClubReducer);
	const errorMessage = useSelector((state) => state.bookClubReducer.error);
    const location = useLocation();
    const fromPage = new URLSearchParams(location.search).get("from") || "bookClub";
	const dispatch = useDispatch();
    const navigate = useNavigate()

	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [passwordError, setPasswordError] = useState(null);

    useEffect(() => {
        if (state.isAuthenticated) {
            navigate( `/${fromPage}` );
        }
    }, [state.isAuthenticated, navigate]);

	const handleRegister = async (e) => {
		e.preventDefault();
		// setErrorMessage( null )

		if (password !== confirmPassword) {
			setPasswordError("Passwords do not match");
			return;
		}

		setPasswordError(null);

		const formData = new FormData(e.target);
        console.log( formData )
		const username = formData.get("username");
		// const password = formData.get("password");
		const email = formData.get("email");
		const displayName = formData.get("displayName");
        
        const userData = { username, password, email, displayName }

		try {
			await dispatch(register(userData));
		} catch (error) {
			console.log("error", error);
			// setErrorMessage( error.message )
		}
	};

	return (
		<div className="register-container">
			<h2 className="section-title">Register</h2>

			<div className="register-form-container">
				{errorMessage && <p className="error-message">{errorMessage}</p>}
				{passwordError && <p className="error-message">{passwordError}</p>}

				<form className="register-form" onSubmit={handleRegister}>
					<label className="register-form-label">
						Username:
						<input title="username" name="username" required />
					</label>
					<label className="register-form-label">
						Password:
						<input name="password" type="password" required value={password} onChange={e => setPassword( e.target.value )}/>
					</label>
					<label className="register-form-label">
						Re-type Password:
						<input name="retype-password" type="retype-password" required value={confirmPassword} onChange={e => setConfirmPassword( e.target.value )}/>
					</label>

					<label className="register-form-label">
						Email:
						<input title="email" name="email" />
					</label>

					<label className="register-form-label">
						Display Name:
						<input title="displayName" name="displayName" required />
					</label>

					<button type="submit" className="register-button">
						Register
					</button>
				</form>

                <div>
					<p>Already have an account?</p>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</div>
	);
}
