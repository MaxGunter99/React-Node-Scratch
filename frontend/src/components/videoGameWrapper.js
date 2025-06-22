import React from "react";
import { useParams } from "react-router-dom";
import VideoGameView from "./videoGameView";

const VideoGamePageWrapper = () => {
	const { id } = useParams();
	return <VideoGameView id={id} />;
};

export default VideoGamePageWrapper;
