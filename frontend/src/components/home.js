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
		<div className="app-container">
			<div className="section-header">
				<h1>Welcome to {config.APP_NAME}</h1>
			</div>

			<div className="content-container">
				<div className="description">
					<h3>What's the purpose?</h3>
					<p>
						This project is a hands-on sandbox built to sharpen your React reflexes — frontend and backend
						alike. It's not just about writing code — it's about re-forging your dev skills with clean
						components, real-world features, and a little bit of ✨ style ✨. Consider it your own little
						dojo, a place where muscle memory is earned through repetition, experimentation, and the
						occasional faceplant followed by a triumphant comeback. Each click, each state update, each
						well-placed `console.log` is a pixel in the bigger picture of growth — a developer in motion,
						chasing mastery one bracket at a time. The structure's here, but the soul? That's on you. So get
						weird with it, break things, fix them, and maybe — just maybe — come out the other side with
						code that doesn't just work, but *feels* like it belongs in the world.
					</p>
				</div>

				<br />

				<p>
					<strong>Here's what's currently loaded up:</strong>
				</p>

				<br />

				<div className="tool-container">
					<h3 className="tool-title">The Weather</h3>
					<div className="tool-details-container">
						<div className="status-container">
							<p>Status:</p>
							{/* <StatusIncomplete className="status-icon incomplete"/> */}
							{/* <StatusInProgress className="status-icon in-progress"/> */}
							<StatusComplete className="status-icon complete" />
						</div>
						<Link to="/weather">
							<LinkToIcon className="link-icon" />
						</Link>
					</div>
					<ul>
						<li>The Weather — live, geolocation-based weather data with caching</li>
						<li>
							Utilizes a free weather API:{" "}
							<a href="https://www.weatherapi.com">https://www.weatherapi.com</a>
						</li>
						<li>Caches weather data every hour rather than requesting it on every refresh</li>
					</ul>
				</div>
				<br />

				<p>
					<strong>Here's a list of potential projects:</strong>
				</p>
				<br />

				<div className="tool-container">
					<h3 className="tool-title">Unauthenticated List</h3>
					<div className="tool-details-container">
						<div className="status-container">
							<p>Status:</p>
							{/* <StatusIncomplete className="status-icon incomplete"/> */}
							<StatusInProgress className="status-icon in-progress" />
							{/* <StatusComplete className="status-icon complete"/> */}
						</div>

						<Link to="/unauthenticatedMessages">
							<LinkToIcon className="link-icon" />
						</Link>
					</div>
					<ul>
						<li>Stores raw text in a database!</li>
						<li>Perform simple CRUD operations on a list connected to the database.</li>
						<li>No authentication required</li>
					</ul>
				</div>
				<br />

				<div className="tool-container">
					<h3 className="tool-title">Book Club or Watch List</h3>
					<div className="tool-details-container">
						<div className="status-container">
							<p>Status:</p>
							<StatusIncomplete className="status-icon incomplete" />
							{/* <StatusInProgress className="status-icon in-progress"/> */}
							{/* <StatusComplete className="status-icon complete"/> */}
						</div>
						<Link to="/watchList">
							<LinkToIcon className="link-icon" />
						</Link>
					</div>
					<ul>
						<li>Mini-app that showcases user authentication in a book club or watch list setting</li>
						<li>Users can login and list things they have enjoyed, rating each thing</li>
						<li>Users can not read or update data if they are not logged in</li>
					</ul>
				</div>
				<br />
			</div>
		</div>
	);
}
