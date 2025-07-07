import { Link } from "react-router-dom";
import BookList from "./bookList";
import { useSelector, useDispatch } from "react-redux";

export default function BookHome() {
	const state = useSelector((state) => state.bookClubReducer);
	const authenticated = useSelector((state) => state.bookClubReducer.isAuthenticated);
	const dispatch = useDispatch();

	console.log(state);
	console.log(authenticated);

	return (
		<div className="book-home-container">
			<h1>Book Home</h1>
			{authenticated === true ? (
				<div>
					{/* If logged in */}
					{/* <button>Account</button> */}
					<Link to="/register">Login</Link>
				</div>
			) : (
				<div>
					{/* If not logged in */}
					<Link to="/login">Login</Link>
				</div>
			)}

			{/* <p>this is the home page, it will serve as a landing page, you can see things but if you want to do anything you'll have to log in</p> */}
			{/* <BookList /> */}
		</div>
	);
}
