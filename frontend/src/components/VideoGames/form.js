import { Star, Link as LinkIcon } from "react-feather";
import { Link } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import { getVideoGame, updateVideoGame, addVideoGame } from "../../actions/videoGameActions";
import "../../css/videoGamesForm.css";

class VideoGameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videoGameEdits: {},
			submittedUpdates: false,
		};
	}

	componentDidMount() {
        console.log( this.props )
        if ( this.props.formMode === "edit" ) {
            this.props.getVideoGame(this.props.id);
            const updatedState = {
                // ...this.state,
                videoGameEdits: { ...this.props.videoGameViewData },
            };
            this.setState(updatedState);
        }
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.videoGameViewData && this.props.videoGameViewData) {
			this.setState({
                ...this.state,
				videoGameEdits: { ...this.props.videoGameViewData },
			});
		}
	}

	handleChanges = (event) => {
		const { name, value } = event.target;
		const updatedState = {
            ...this.state,
			videoGameEdits: {
				...this.props.videoGameViewData,
				[name]: value,
			},
		};
		this.setState(updatedState);
	};

	submitChanges = async (event) => {
		event.preventDefault();
		console.log(this.props);
		console.log(this.state.videoGameEdits);
		try {

            if ( this.props.formMode === "edit" ) {
                console.log("editing")
                await this.props.updateVideoGame(this.state.videoGameEdits);

            } else if ( this.props.formMode === "add" ) {
                console.log("adding")
                await this.props.addVideoGame(this.state.videoGameEdits);
            }

		} catch (error) {
            console.log( error )
			return this.setState(...this.state, { submittedUpdates: true });
		}
		this.props.navigate(-1);
	};

	abortChanges = () => {
		this.props.navigate(-1);
	};

	render() {
		return (
			<div className="edit-video-game-form-container">
				{this.props.fetchingVideoGame && this.props.formMode === "edit" ? (
					<p>Loading...</p>
				) : this.props.error &&
				  !this.props.loading &&
				  !this.props.videoGameViewData &&
				  !this.state.submittedUpdates ? (
					<p className="error-message">{this.props.error}</p>
				) : !this.props.videoGameViewData && this.props.formMode === "edit" ? (
					<p className="error-message">No Video Games Listed Yet</p>
				) : (
					<div className="edit-video-game-form-container">
						{this.props.error && !this.props.loading && this.props.videoGameViewData ? (
							<div>
								<p className="error-message">{this.props.error}</p>
							</div>
						) : null}

						<form
							onChange={this.handleChanges}
							onSubmit={this.submitChanges}
							className="edit-video-game-form"
						>
                            { this.props.formMode === "edit" ? (

                                <div className="edit-video-game-form-row disabled">
                                    <label>
                                        ID:
                                        <input
                                            className="form-field"
                                            name="id"
                                            value={this.state.videoGameEdits.id}
                                            onChange={this.handleChanges}
                                            disabled
                                        />
                                    </label>

                                    <label>
                                        UUID:
                                        <input
                                            className="form-field"
                                            name="uuid"
                                            value={this.state.videoGameEdits.uuid}
                                            onChange={this.handleChanges}
                                            disabled
                                        />
                                    </label>

                                    <label>
                                        Created At:
                                        <input
                                            className="form-field"
                                            name="created_at"
                                            value={this.state.videoGameEdits.created_at}
                                            // onChange={this.handleChanges}
                                            disabled
                                        />
                                    </label>
                                </div>
                            ) : null }

							<div className="edit-video-game-form-row">
								<label>
									Name:
									<input
										className="form-field"
										name="name"
										value={this.state.videoGameEdits.name}
										// onChange={this.handleChanges}
                                        required
									/>
								</label>

								<label>
									Genre:
									<input
										className="form-field"
										name="genre"
										value={this.state.videoGameEdits.genre}
										// onChange={this.handleChanges}
									/>
								</label>
							</div>

							<div className="edit-video-game-form-row url">
								<label>
									Cover Image URL:
									<input
										className="form-field"
										name="cover_image_url"
										value={this.state.videoGameEdits.cover_image_url}
										// onChange={this.handleChanges}
									/>
								</label>

								<label>
									External URL:
									<input
										className="form-field"
										name="external_url"
										value={this.state.videoGameEdits.external_url}
										// onChange={this.handleChanges}
									/>
								</label>
							</div>

							<div className="edit-video-game-form-row image-preview">
								<p>Image Preview: </p>
								<img src={this.state.videoGameEdits.cover_image_url} />
							</div>

							<div className="edit-video-game-form-row">
								<label>
									Comments:
									<textarea
										className="form-field"
										name="comments"
										value={this.state.videoGameEdits.comments}
										// onChange={this.handleChanges}
									/>
								</label>
							</div>

							<div className="edit-video-game-form-row">
								<label>
									Completed:
									<select
										className="form-field"
										name="completed"
										value={this.state.videoGameEdits.completed}
										// onChange={this.handleChanges}
									>
										<option value={0}>No</option>
										<option value={1}>Yes</option>
									</select>
								</label>

								<label>
									Favorite:
									<select
										className="form-field"
										name="favorite"
										value={this.state.videoGameEdits.favorite}
										// onChange={this.handleChanges}
									>
										<option value={0}>No</option>
										<option value={1}>Yes</option>
									</select>
								</label>

								<label>
									Replayable:
									<select
										className="form-field"
										name="replayable"
										value={this.state.videoGameEdits.replayable}
										// onChange={this.handleChanges}
									>
										<option value={0}>No</option>
										<option value={1}>Yes</option>
									</select>
								</label>
							</div>

							<div className="edit-video-game-form-row">
								<label>
									Rating:
									<select
										className="form-field"
										name="rating"
										value={this.state.videoGameEdits.rating}
										// onChange={this.handleChanges}
									>
										<option value={""}>0</option>
										<option value={"*"}>1</option>
										<option value={"**"}>2</option>
										<option value={"***"}>3</option>
										<option value={"****"}>4</option>
										<option value={"*****"}>5</option>
									</select>
								</label>

								<label>
									Platform:
									<select
										className="form-field"
										name="platform"
										value={this.state.videoGameEdits.platform}
										// onChange={this.handleChanges}
                                        defaultValue={"other"}
									>
										<option value={"pc"}>PC</option>
										<option value={"steam_deck"}>Steam Deck</option>
										<option value={"mobile"}>Mobile</option>
										<option value={"xbox_360"}>Xbox 360</option>
										<option value={"xbox_one"}>Xbox One</option>
										<option value={"xbox_series_s"}>Xbox Series S</option>
										<option value={"xbox_series_x"}>Xbox Series X</option>
										<option value={"switch"}>Switch</option>
										<option value={"switch_2"}>Switch 2</option>
										<option value={"wii"}>Wii</option>
										<option value={"ds"}>DS</option>
										<option value={"3ds"}>3DS</option>
										<option value={"ps2"}>Playstation 2</option>
										<option value={"ps3"}>Playstation 3</option>
										<option value={"ps4"}>Playstation 4</option>
										<option value={"ps5"}>Playstation 5</option>
										<option value={"other"}>Other</option>
									</select>
								</label>
							</div>

							<div className="edit-video-game-form-row dates">
								<label>
									started at:
									<input
										className="form-field"
										type="date"
										name="started_at"
										value={this.state.videoGameEdits.started_at}
										// onChange={this.handleChanges}
                                        // defaultValue={new Date().toISOString().split("T")[0]}
									/>
								</label>
								<label>
									Finished at:
									<input
										className="form-field"
										type="date"
										name="finished_at"
										value={this.state.videoGameEdits.finished_at}
										// onChange={this.handleChanges}
									/>
								</label>
							</div>

							<div className="edit-video-game-form-row buttons">
								<button type="button" onClick={this.abortChanges}>
									Back
								</button>
								<button type="submit">Submit</button>
							</div>
						</form>
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

export default connect(mapStateToProps, { getVideoGame, updateVideoGame, addVideoGame })(VideoGameForm);
