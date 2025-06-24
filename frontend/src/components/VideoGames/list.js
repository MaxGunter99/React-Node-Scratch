import { Star, Link as LinkIcon } from "react-feather";
import { Link } from "react-router-dom";
import { Component } from "react";
import "../../css/videoGamesList.css";

class VideoGame extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-block">
				<div
					className="video-game-container"
					style={{ backgroundImage: `url(${this.props.videoGame.cover_image_url})` }}
				>
					<div className="video-game-details-container">
						<div className="video-game-header-content">
							<h5 className="video-game-title">{this.props.videoGame.name}</h5>
							<p className="video-game-platform">
								{this.props.videoGame.platform
									.split("_")
									.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
									.join(" ")}
							</p>
						</div>
						<p className="video-game-rating">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star
									key={i}
									className={`rating-icon ${i < this.props.videoGame.rating.length ? "active" : ""}`}
								/>
							))}
						</p>

						<Link to={`/videoGames/${this.props.videoGame.id}`}>
							<LinkIcon />
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default VideoGame;
