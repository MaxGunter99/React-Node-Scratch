import { Link } from "react-router-dom";
import { Home } from "react-feather";

import "../css/pageNotFound.css";

export default function PageNotFound() {
	return (
		<div className="NotFoundContainer">
			<h2 className="PageNotFoundMessage">404 PAGE NOT FOUND</h2>
			<Link to="/home">
				<Home />
			</Link>
		</div>
	);
}
