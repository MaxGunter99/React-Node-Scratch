
import { Link, useNavigate } from "react-router-dom";
import BookList from "./bookList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { validateAuthentication } from "../../actions/bookClubActions";

export default function BookProfile() {

    const authenticated = useSelector((state) => state.bookClubReducer.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( () => {
            dispatch( validateAuthentication() )
            if ( !authenticated ) {
                navigate("/login?from=bookClub/profile")
            }
    }, [ authenticated ])

    return (
        <div>
            <h1>Book Profile!</h1>
        </div>
    )
}