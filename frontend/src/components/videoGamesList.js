
import { React, Component } from "react";
import { connect } from "react-redux"
import { getVideoGames } from "../actions/videoGameActions"

import "../css/videoGames.css";

class videoGamesList extends Component {

    componentDidMount() {
        this.props.getVideoGames();
        console.log( "PROPS", this.props )
    };

    render() {
        return (
            <div className="video-games-app-container">
                
                <p>Video Games</p>

                { this.props.fetchingVideoGames ? (

                    <div className="app-content-container">
                        <p>loading</p>
                    </div>

                ) : this.props.fetchingVideoGames === false && this.props.error ? (
                    <div className="app-content-container">
                        <p className="error-message">{this.props.error}</p>
                    </div>
                ) : (

                    <div className="app-content-container">
                        { this.props.videoGames.map( ( videoGame, id ) => {
                            return (
                                <p key={id}>{videoGame.name}</p>
                            )
                        })}
                    </div>

                )}

                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetchingVideoGames: state.videoGamesReducer.fetchingVideoGames,
        videoGames: state.videoGamesReducer.videoGames,
        error: state.videoGamesReducer.error
    }
}

export default connect (
    mapStateToProps,
    { getVideoGames }
)( videoGamesList )