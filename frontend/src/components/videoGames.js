import { React, Component } from "react";
import { connect } from "react-redux";
import { getVideoGames } from "../actions/videoGameActions";

import "../css/videoGames.css";

class videoGamesList extends Component {
	componentDidMount() {
		this.props.getVideoGames();
		// console.log( "PROPS", this.props )
	}

	render() {
		return (
			<div className="video-games-app-container">
				<div className="title-container">
					<h2>Video Games</h2>
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
	return (
		<div className="video-game-container">
			<p>id: {props.videoGame.id}</p>
			<p>uuid: {props.videoGame.uuid}</p>
			<p>name: {props.videoGame.name}</p>
			<p>platform: {props.videoGame.platform}</p>
			<p>rating: {props.videoGame.rating}</p>
			<p>genre: {props.videoGame.genre}</p>
			<p>cover_image_url: {props.videoGame.cover_image_url}</p>
			<p>external_url: {props.videoGame.external_url}</p>
			<p>favorite: {props.videoGame.favorite}</p>
			<p>comments: {props.videoGame.comments}</p>
			<p>completed: {props.videoGame.completed}</p>
			<p>replayable: {props.videoGame.replayable}</p>
			<p>started_at: {props.videoGame.started_at}</p>
			<p>finished_at: {props.videoGame.finished_at}</p>
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
