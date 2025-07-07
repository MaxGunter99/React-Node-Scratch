import { Component } from "react";
import { connect } from "react-redux";

import { getVideoGames } from "../../actions/videoGameActions";
import VideoGame from "./list";

import "../../css/videoGamesList.css";
import { Plus } from "react-feather";
import { Link } from "react-router-dom";

class VideoGamesIndex extends Component {
	componentDidMount() {
		this.props.getVideoGames();
	}

	render() {
		return (
			<div className="video-games-app-container">
				<div className="video-games-app-header-container">
					<div className="header-text-container">
						<h2 className="section-title">Video Games</h2>
						<p>
							List video games, add to the list, rate them, show images, all powered by class components
							and redux
						</p>
					</div>
					<Link to="/videoGames/add" title="add">
						<Plus className="add-button icon" />
					</Link>
				</div>

				{this.props.loading ? (
					<div className="app-content-container">
						<p>loading</p>
					</div>
				) : this.props.loading === false && this.props.error ? (
					<div className="app-content-container">
						<p className="error-message">{this.props.error}</p>
					</div>
				) : this.props.loading === false && !this.props.error && !this.props.videoGames.length ? (
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

const mapStateToProps = (state) => {
	return {
		loading: state.videoGamesReducer.loading,
		videoGames: state.videoGamesReducer.videoGames,
		error: state.videoGamesReducer.error,
	};
};

export default connect(mapStateToProps, { getVideoGames })(VideoGamesIndex);
