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
				<h1>
					Welcome to <strong className="app-name-reference">{config.APP_NAME}</strong>
				</h1>
			</div>

			<div className="content-container">
				<div className="description">
					<h3>What's the purpose?</h3>
					<p>
						<strong className="app-name-reference">{config.APP_NAME}</strong> is a hands-on React sandbox
						built to level up your frontend and backend skills. It's not just about writing code — it's
						about experimenting, building real features, and learning through trial and error. Think of it
						as your dev dojo: break things, fix them, and grow. Every click, every bug, every console.log is
						part of the process.
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
							<p>
								<strong>Status:</strong>
							</p>
							{/* <StatusIncomplete className="status-icon incomplete"/> */}
							{/* <StatusInProgress className="status-icon in-progress"/> */}
							<StatusComplete className="status-icon complete" />
						</div>
						<Link to="/weather">
							<LinkToIcon className="link-icon" />
						</Link>
					</div>
					<ul>
						<li>
							The Weather — live, <strong>geolocation-based weather data</strong> with caching
						</li>
						<li>
							Utilizes a free <strong>weather API</strong>:{" "}
							<a href="https://www.weatherapi.com">https://www.weatherapi.com</a>
						</li>
						<li>
							<strong>Caches</strong> weather data every hour rather than requesting it on every refresh
						</li>
					</ul>
				</div>
				<br />

				<div className="tool-container">
					<h3 className="tool-title">Unauthenticated Messages</h3>
					<div className="tool-details-container">
						<div className="status-container">
							<p>
								<strong>Status:</strong>
							</p>
							{/* <StatusIncomplete className="status-icon incomplete"/> */}
							{/* <StatusInProgress className="status-icon in-progress" /> */}
							<StatusComplete className="status-icon complete" />
						</div>

						<Link to="/unauthenticatedMessages">
							<LinkToIcon className="link-icon" />
						</Link>
					</div>
					<ul>
						<li>
							Connected to a <strong>database</strong> using custom <strong>Node.js</strong> API routes
						</li>
						<li>
							Dynamic frontend built with <strong>React Hooks</strong> and{" "}
							<strong>functional components</strong>
						</li>
						<li>
							Add, update, and delete entries in real-time — <strong>no authentication required</strong>
						</li>
						<li>
							Backend <strong>profanity filters</strong> included to prevent inappropriate language from
							being submitted to the database.
						</li>
					</ul>
				</div>
				<br />

				<p>
					<strong>Here's a list of potential projects:</strong>
				</p>
				<br />

				<div className="tool-container">
					<h3 className="tool-title">Redux Video Game Tracker</h3>
					<div className="tool-details-container">
						<div className="status-container">
							<p>
								<strong>Status:</strong>
							</p>
							{/* <StatusIncomplete className="status-icon incomplete" /> */}
							<StatusInProgress className="status-icon in-progress" />
							{/* <StatusComplete className="status-icon complete"/> */}
						</div>
						<Link to="/videoGames">
							<LinkToIcon className="link-icon" />
						</Link>
					</div>
					<ul>
						<li>
							Connected to a <strong>database</strong> using custom <strong>Node.js</strong> API routes
						</li>
						<li>
							Utilizes <strong>redux</strong> for state management and <strong>Class Components</strong>
						</li>
						<li>
							Add, change, or delete a <strong>list of video games</strong> played
						</li>
						<li>
							Each listed video game should have these properties:{" "}
							<strong>
								id, uuid, name, platform, rating, genre, cover_image_url, external_url, favorite,
								comments, completed, replayable, started_at, finished_at
							</strong>
						</li>
						<li>
							<strong>No user authentication</strong> required for this yet
						</li>
						<li>
							Backend <strong>profanity filters</strong> included to prevent inappropriate language from
							being submitted to the database.
						</li>
						<li>
							Backend video game list should be <strong>filterable</strong> based on platform, rating, and
							favorite
						</li>
					</ul>
				</div>
				<br />

				<div className="tool-container">
					<h3 className="tool-title">Book Club</h3>
					<div className="tool-details-container">
						<div className="status-container">
							<p>
								<strong>Status:</strong>
							</p>
							<StatusIncomplete className="status-icon incomplete" />
							{/* <StatusInProgress className="status-icon in-progress"/> */}
							{/* <StatusComplete className="status-icon complete"/> */}
						</div>
						<Link to="/watchList">
							<LinkToIcon className="link-icon" />
						</Link>
					</div>
					<ul>
						<li>
							Mini-app that showcases <strong>user authentication</strong> and <strong>Redux</strong> in a
							book club or watch list setting
						</li>
						<li>Redux should utilize: "redux", "react-redux", "redux-thunk", "redux-logger"</li>
						<li>
							Utilizes <strong>Class Components</strong>
						</li>
						<li>
							Each user can <strong>login</strong> and add to a list of things they have enjoyed
						</li>
						<li>
							Users can <strong>view other users lists</strong> that are public
						</li>
						<li>
							Users can <strong>create private lists</strong> that other users can not see, unless invited
							to
						</li>
						<li>
							Users can <strong>NOT</strong> create, read, update, or delete their data or others data if
							they are <strong>not logged in</strong>
						</li>
					</ul>
				</div>
				<br />
			</div>
		</div>
	);
}
