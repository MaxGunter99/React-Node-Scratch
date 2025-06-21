import { Link } from "react-router-dom";
import { Home } from "react-feather";

import "../css/pageNotFound.css";

export default function PageNotFound() {
	return (
		<div className="not-found-container">
			<h2 className="page-not-found-message">404 PAGE NOT FOUND</h2>
			<Link to="/">
				<Home />
			</Link>
		</div>
	);
}
