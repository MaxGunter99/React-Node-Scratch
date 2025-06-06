// CSS
import "./css/AppRouting.css";

// DEPENDENCIES
import { Routes, Route, NavLink } from "react-router-dom";

// COMPONENTS
import Home from "./components/home.js";
import PageNotFound from "./components/pageNotFound.js";
import Weather from "./components/weather.js";
import config from "./config.js";

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
		</div>
	);
}
