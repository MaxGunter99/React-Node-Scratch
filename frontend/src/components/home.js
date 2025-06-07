// CSS
import "../css/home.css";

// DEPENDENCIES
import config from "../config";

export default function Home() {
	return (
		<div className="AppContainer">
			<h2>App Description</h2>
			<p>The purpose of {config.APP_NAME} is to get some practice with different core concepts and refresh your react skills on the frontend as well as the backend</p>
		</div>
	);
}
