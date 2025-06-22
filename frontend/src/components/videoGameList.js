import { Component } from "react";
import { connect } from "react-redux";
import { Star } from "react-feather";
import { useNavigate } from "react-router-dom";

import { getVideoGames } from "../actions/videoGameActions";

import "../css/videoGamesList.css";

class videoGamesList extends Component {
	componentDidMount() {
		this.props.getVideoGames();
		// console.log( "PROPS", this.props )
	}

	render() {
		return (
			<div className="video-games-app-container">
				<div className="title-container">
					<h2 className="section-title">Video Games</h2>
					<p>
						List video games, add to the list, rate them, show images, all powered by class components and
						redux
					</p>
				</div>

				{this.props.fetchingVideoGames ? (
					<div className="app-content-container">
						<p>loading</p>
					</div>
				) : this.props.fetchingVideoGames === false && this.props.error ? (
					<div className="app-content-container">
						<p className="error-message">{this.props.error}</p>
					</div>
				) : this.props.fetchingVideoGames === false && !this.props.error && !this.props.videoGames.length ? (
					<div className="app-content-container">
						<p className="error-message">No Video Games Listed Yet</p>
					</div>
				) : (
					<div className="app-content-container">
						{this.props.videoGames.map((videoGame, id) => {
							return <VideoGame key={id} videoGame={videoGame} />;
						})}
					</div>
				)}
			</div>
		);
	}
}

const VideoGame = (props) => {
	const navigate = useNavigate();
	const navigateToVideoGame = (id) => {
		navigate(`/videoGames/${id}`);
	};

	return (
		<div className="container-block">
			<div
				className="video-game-container"
				style={{ backgroundImage: `url(${props.videoGame.cover_image_url})` }}
				onClick={() => navigateToVideoGame(props.videoGame.id)}
			>
				{/* <p>id: {props.videoGame.id}</p> */}
				{/* <p>uuid: {props.videoGame.uuid}</p> */}
				<div className="video-game-details-container">
					<div className="video-game-header-content">
						<h5 className="video-game-title">{props.videoGame.name}</h5>
						<p className="video-game-platform">
							{props.videoGame.platform
								.split("_")
								.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
								.join(" ")}
						</p>
					</div>
					{/* <p>rating: { returnStars() }</p> */}
					<p className="video-game-rating">
						{Array.from({ length: 5 }).map((_, i) => (
							<Star
								key={i}
								className={`rating-icon ${i < props.videoGame.rating.length ? "active" : ""}`}
							/>
						))}
					</p>

					{/* <p>favorite: {props.videoGame.favorite}</p> */}
				</div>
				{/* <img className="cover-image" src={props.videoGame.cover_image_url} /> */}
				{/* <p>genre: {props.videoGame.genre}</p> */}
				{/* <p>cover_image_url: {props.videoGame.cover_image_url}</p> */}
				{/* <p>external_url: {props.videoGame.external_url}</p> */}
				{/* <p>comments: {props.videoGame.comments}</p> */}
				{/* <p>completed: {props.videoGame.completed}</p> */}
				{/* <p>replayable: {props.videoGame.replayable}</p> */}
				{/* <p>started_at: {props.videoGame.started_at}</p> */}
				{/* <p>finished_at: {props.videoGame.finished_at}</p> */}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		fetchingVideoGames: state.videoGamesReducer.fetchingVideoGames,
		videoGames: state.videoGamesReducer.videoGames,
		error: state.videoGamesReducer.error,
	};
};

export default connect(mapStateToProps, { getVideoGames })(videoGamesList);
