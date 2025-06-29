import { Component } from "react";
import { connect } from "react-redux";
import { Star, Edit, ArrowLeft, Trash } from "react-feather";
import { Link } from "react-router-dom";
import "../../css/videoGameView.css";

import { getVideoGame, deleteVideoGame } from "../../actions/videoGameActions";

class VideoGameView extends Component {

	componentDidMount() {
		this.props.getVideoGame(this.props.id);
	}

	goBack = () => {
		return this.props.navigate(-1);
	}
	
	deleteGame = async () => {

		var videoGameDeleted = false;

		try {
			await this.props.deleteVideoGame( this.props.id );
			videoGameDeleted = true;
			
		} catch ( error ) {
			console.log( "Error deleting Video Game: ", error )
		}

		if ( videoGameDeleted === true ) {
			return this.props.navigate(-1);
		}
		
	}

	render() {
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
						<div className="cover-container">
							<img
								className="video-game-cover-image"
								src={this.props.videoGameViewData.cover_image_url}
							/>

							<div className="title-section-container">
								<div className="title-section">
									<h2 className="video-game-view-title">{this.props.videoGameViewData.name}</h2>
									<p>Genre: {this.props.videoGameViewData.genre}</p>
									<p>
										Platform:{" "}
										{this.props.videoGameViewData.platform
											.split("_")
											.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
											.join(" ")}
									</p>
								</div>

								<div className="title-section-actions">
									<Link onClick={this.goBack}>
										<ArrowLeft className="back-button icon" />
									</Link>
									<Link to={`/videoGames/${this.props.videoGameViewData.id}/edit`}>
										<Edit className="edit-button icon" />
									</Link>
									<Link onClick={this.deleteGame}>
										<Trash className="delete-button icon" />
									</Link>
								</div>
							</div>
						</div>

						<div className="video-game-subsections">
							<div className="video-game-subsection-one">
								<p>Completed: {this.props.videoGameViewData.completed === 1 ? "Yes" : "No"}</p>
								<p className="rating-stars">
									{Array.from({ length: 5 }).map((_, i) => (
										<Star
											key={i}
											className={`star-rating-icon ${i < this.props.videoGameViewData.rating.length ? "active" : ""}`}
										/>
									))}
								</p>
								<p>Favorite: {this.props.videoGameViewData.favorite === 1 ? "Yes" : "No"}</p>
							</div>

							<div className="video-game-subsection-two">
								<p>Comments:</p>
								<textarea value={this.props.videoGameViewData.comments} disabled />
							</div>

							<div className="video-game-subsection-three">
								<p>Started at: {this.props.videoGameViewData.started_at}</p>
								<p>Finished at: {this.props.videoGameViewData.finished_at}</p>
							</div>

							<div className="video-game-subsection-four">
								<p>Replayable: {this.props.videoGameViewData.replayable === 1 ? "Yes" : "No"}</p>
								<p>Created: {this.props.videoGameViewData.created_at}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetchingVideoGame: state.videoGamesReducer.loading,
		videoGameViewData: state.videoGamesReducer.videoGameViewData,
		error: state.videoGamesReducer.error,
	};
};

export default connect(mapStateToProps, { getVideoGame, deleteVideoGame })(VideoGameView);
