import { Component } from "react";
import { connect } from "react-redux";
import { Star } from "react-feather";
// import { useParams } from 'react-router-dom';
import "../css/videoGameView.css";

import { getVideoGame } from "../actions/videoGameActions";

class VideoGameView extends Component {
	componentDidMount() {
		this.props.getVideoGame(this.props.id);
	}

	render() {
		// const { videoGameViewData } = this.props;

		return (
			<div className="app-content-container">
				{this.props.fetchingVideoGame ? (
					<p>Loading...</p>
				) : this.props.error ? (
					<p className="error-message">{this.props.error}</p>
				) : !this.props.videoGameViewData ? (
					<p className="error-message">No Video Games Listed Yet</p>
				) : (
					<div className="single-video-game-container">
						<div>
							<img
								className="video-game-cover-image"
								src={this.props.videoGameViewData.cover_image_url}
							/>
							<h2>{this.props.videoGameViewData.name}</h2>

							<div>
								<p>Genre: {this.props.videoGameViewData.genre}</p>
								<p>{this.props.videoGameViewData.platform}</p>
							</div>
						</div>

						<div>
							<div>
								<p>Comments:</p>
								<textarea value={this.props.videoGameViewData.comments} disabled />
							</div>

							<p>Favorite: {this.props.videoGameViewData.favorite ? "Yes" : "No"}</p>
							<p>Rating: {this.props.videoGameViewData.rating}</p>
							<p>Completed: {this.props.videoGameViewData.completed ? "Yes" : "No"}</p>

							<div>
								<p>Started at: {this.props.videoGameViewData.started_at}</p>
								<p>Finished at: {this.props.videoGameViewData.finished_at}</p>
							</div>

							<p>Replayable: {this.props.videoGameViewData.replayable ? "Yes" : "No"}</p>

							<p>Created: {this.props.videoGameViewData.created_at}</p>
						</div>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetchingVideoGame: state.videoGamesReducer.fetchingVideoGames,
		videoGameViewData: state.videoGamesReducer.videoGameViewData,
		error: state.videoGamesReducer.error,
	};
};

export default connect(mapStateToProps, { getVideoGame })(VideoGameView);
