import { Link, useNavigate } from "react-router-dom";
import BookList from "./bookList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { validateAuthentication } from "../../actions/bookClubActions";

export default function BookHome() {
	const state = useSelector((state) => state.bookClubReducer);
	const authenticated = useSelector((state) => state.bookClubReducer.isAuthenticated);
	const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect( () => {
        dispatch( validateAuthentication() )
        if ( !authenticated ) {
            navigate("/login?from=bookClub")
        }
    }, [ authenticated ])

    const handleLogOut = () => {
        navigate("/login?from=bookClub")
    }

	return (
		<div className="book-home-container">

            <div>
                <div>
                    <h1>Book Home</h1>
                    <p>authenticated: {String(authenticated )}</p>
                </div>

                <div>
                    <Link to="profile"><button>Profile</button></Link>
                    <button onClick={handleLogOut}>Logout</button>
                </div>

            </div>
			{/* <p>this is the home page, it will serve as a landing page, you can see things but if you want to do anything you'll have to log in</p> */}

			<BookList />

		</div>
	);
}
