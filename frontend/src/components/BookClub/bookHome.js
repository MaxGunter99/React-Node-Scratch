
import { useEffect , useState } from "react";
import BookList from "./bookList"
import { useSelector, useDispatch } from "react-redux";

export default function BookHome() {

    const [ authenticated, setAuthenticated ] = useState( false );

    const state = useSelector((state) => state.bookClubReducer);
    const dispatch = useDispatch();

    useEffect( () => {
        setAuthenticated( state.isAuthenticated )
    }, [ state ])

    console.log( state )
    console.log( authenticated )


    // useReducer( rootReducer )

    return (
        <div>
            <h1>Book Home</h1>
            { authenticated === true ? (
                
                <div>
                    {/* If logged in */}
                    <button>Account</button>
                </div>

            ) : (
    
                <div>
                    {/* If not logged in */}
                    <button>Login</button>
                </div>
            )}

            <p>this is the home page, it will serve as a landing page, you can see things but if you want to do anything you'll have to log in</p>
            <BookList />
        </div>
    )

}