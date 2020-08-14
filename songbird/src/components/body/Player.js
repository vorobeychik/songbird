import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {useSelector} from "react-redux";

export default function Player(props){
    return(
        <AudioPlayer
            autoPlay = {false}
            autoPlayAfterSrcChange={false}
            src={props.audio}
            onPlay={e => console.log("onPlay")}
            // other props here
        />
    );
}