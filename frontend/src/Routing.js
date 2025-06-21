// CSS
import "./css/routing.css";

// DEPENDENCIES
import { Routes, Route, NavLink } from "react-router-dom";

// COMPONENTS
import Home from "./components/home.js";
import PageNotFound from "./components/pageNotFound.js";
import Weather from "./components/weather.js";
import config from "./config.js";
// import Logo from "./images/FavIconTransparent.PNG"
// import Logo from "./images/FavIcon.png";
import LambdaStamp from "./images/LambdaStamp.png";
// import { Github, Linkedin, BriefcaseBusiness } from "feather-icons";
import { GitHub, Linkedin, Briefcase, User as MaxIcon, Coffee as SchoolIcon, Tool as ToolIcon } from "react-feather";
import UnauthenticatedMessages from "./components/unauthenticatedMessages.js";
import VideoGames from "./components/videoGames.js";

export default function AppRouting() {
	return (
		<div className="app-routing">
			<header className="app-header">
				<h1 className="app-title">{config["APP_NAME"]}</h1>
				<nav className="nav-bar">
					<NavLink className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} to="/">
						Home
					</NavLink>
					<NavLink className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} to="/weather">
						Weather
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
						to="/unauthenticatedMessages"
					>
						Messages
					</NavLink>
					<NavLink className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} to="/videoGames">
						Video Games
					</NavLink>
				</nav>
			</header>

			<div className="route-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="weather" element={<Weather />} />
					<Route path="unauthenticatedMessages" element={<UnauthenticatedMessages />} />
					<Route path="videoGames" element={<VideoGames />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>

			<footer className="app-footer">
				<div className="footer-content-container">
					<div className="footer-section left">
						<div className="icon-pair">
							<p>Michael (Max) Gunter</p>
							<MaxIcon className="footer-icon" />
						</div>
						<div className="icon-pair link">
							<p
								onClick={() => {
									window.open("https://www.bloomtech.com/");
								}}
							>
								BloomTech (Lambda)
							</p>
							<SchoolIcon className="footer-icon" />
						</div>
						<div className="icon-pair">
							<p>{config["APP_NAME"]} est. 2025</p>
							<ToolIcon className="footer-icon" />
						</div>
					</div>

					<div className="footer-section">
						<img alt="lambda-school-badge" className="footer-logo" src={LambdaStamp} />
					</div>

					<div className="footer-section right">
						<div
							className="icon-pair link"
							onClick={() => {
								window.open("https://github.com/MaxGunter99");
							}}
						>
							<GitHub className="footer-icon" />
							<p>GitHub</p>
						</div>

						<div
							className="icon-pair link"
							onClick={() => {
								window.open("https://www.linkedin.com/in/michael-gunter-5383a0181/");
							}}
						>
							<Linkedin className="footer-icon" />
							<p>LinkedIn</p>
						</div>

						<div
							className="icon-pair link"
							onClick={() => {
								window.open("https://www.linkedin.com/in/michael-gunter-5383a0181/");
							}}
						>
							<Briefcase className="footer-icon" />
							<p>Portfolio</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
