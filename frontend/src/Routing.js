// CSS
import "./css/AppRouting.css";

// DEPENDENCIES
import { Routes, Route, NavLink } from "react-router-dom";

// COMPONENTS
import Home from "./components/home.js";
import PageNotFound from "./components/pageNotFound.js";
import Weather from "./components/weather.js";
import config from "./config.js";
// import Logo from "./images/FavIconTransparent.PNG"
import Logo from "./images/FavIcon.png"
import LambdaStamp from "./images/LambdaStamp.png"

export default function AppRouting() {
	return (
		<div className="app-routing">

			<header className="app-header">
				<h1 className="app-title">{config["APP_NAME"]}</h1>
				<nav className="nav-bar">
					<NavLink
						className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
						to="/weather"
					>
						Weather
					</NavLink>
				</nav>
			</header>

			<div className="route-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="weather" element={<Weather />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>

			<footer className="app-footer">
				<div>
					<p><strong>Michael (Max) Gunter</strong></p>
					<p><strong>Bloom Institute of Technology</strong></p>
					<p><strong>{config["APP_NAME"]} est. 2025</strong></p>
				</div>

				<img className="footer-logo" src={LambdaStamp} />
				{/* <img className="footer-logo" src={Logo} /> */}

				<div>
					<a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
					<br/>
					<a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
					<br/>
					<a href="https://yourportfolio.com" target="_blank" rel="noreferrer">Portfolio</a>
				</div>
			</footer>

		</div>
	);
}
