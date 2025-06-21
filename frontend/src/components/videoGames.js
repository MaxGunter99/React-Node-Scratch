
import { Component } from "react";
import { connect } from "react-redux"

import "../css/videoGames.css";

export default class videoGames extends Component {

    componentDidMount() {
        this.props.getVideoGames();
    };



    render() {
        return (
            <div className="video-games-app-container">
                
                <p>Video Games</p>
                
            </div>
        );
    }
}