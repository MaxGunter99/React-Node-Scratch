// CSS
import "../css/home.css";

// DEPENDENCIES
import config from "../config";
import { Link } from "react-router-dom";
import {
	XCircle as StatusIncomplete,
	Circle as StatusInProgress,
	CheckCircle as StatusComplete,
	Link2 as LinkToIcon,
} from "react-feather";

export default function Home() {
	return (
		<div className="AppContainer">
			<div>
				<h1>Welcome to {config.APP_NAME}</h1>

				<div className="Description">
					<h3>What's the purpose?</h3>
					<p>(AI Generated)</p>

					<p>
						This project is a hands-on sandbox built to sharpen your React reflexes —
						frontend and backend alike. It's not just about writing code — it's about
						re-forging your dev skills with clean components, real-world features, and a
						little bit of ✨ style ✨. Consider it your own little dojo, a place where
						muscle memory is earned through repetition, experimentation, and the
						occasional faceplant followed by a triumphant comeback. Each click, each
						state update, each well-placed `console.log` is a pixel in the bigger
						picture of growth — a developer in motion, chasing mastery one bracket at a
						time. The structure's here, but the soul? That's on you. So get weird with
						it, break things, fix them, and maybe — just maybe — come out the other side
						with code that doesn't just work, but *feels* like it belongs in the world.
					</p>
				</div>
			</div>

			<br />

			<p>
				<strong>Here's what's currently loaded up:</strong>
			</p>

			<br />

			<div className="ToolContainer">
				<h3 className="ToolTitle">The Weather</h3>
				<div className="ToolDetailsContainer">
					<div className="status-container">
						<p>Status:</p>
						<StatusInProgress />
					</div>
					<Link to="/weather">
						<LinkToIcon />
					</Link>
				</div>
				<ul>
					<li>The Weather — live, geolocation-based weather data with caching</li>
					<li>
						Utilizes a free weather API:{" "}
						<a href="https://www.weatherapi.com">https://www.weatherapi.com</a>
					</li>
					<li>
						Caches weather data every hour rather than requesting it on every refresh
					</li>
				</ul>
			</div>
			<br />

			<p>
				<strong>Here's a list of potential projects:</strong>
			</p>
			<br />

			<div className="ToolContainer">
				<h3 className="ToolTitle">Vent</h3>
				<div className="ToolDetailsContainer">
					<div className="status-container">
						<p>Status:</p>
						<StatusIncomplete />
					</div>

					<Link to="/vent">
						<LinkToIcon />
					</Link>
				</div>
				<ul>
					<li>Vent into the Void</li>
					<li>Stores raw text in a database!</li>
					<li>For your eyes only</li>
				</ul>
			</div>
			<br />

			<div className="ToolContainer">
				<h3 className="ToolTitle">Book Club or Watch List</h3>
				<div className="ToolDetailsContainer">
					<div className="status-container">
						<p>Status:</p>
						<StatusIncomplete />
					</div>
					<Link to="/watchList">
						<LinkToIcon />
					</Link>
				</div>
				<ul>
					<li>
						Mini-app that showcases user authentication in a book club or watch list
						setting
					</li>
					<li>Users can login and list things they have enjoyed, rating each thing</li>
					<li>Users can not read or update data if they are not logged in</li>
				</ul>
			</div>
			<br />
		</div>
	);
}
