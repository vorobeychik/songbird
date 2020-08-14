import React from "react";
import MainPlayer from "./MainPlayer";
import GameArea from "./GameArea";
import BirdInfo from "./BirdInfo";
import NextButton from "./NextButton";
import {useSelector} from "react-redux";
import EndScreen from "./endScreen";

export default function Body() {

    const state = useSelector((state) => ({gameEnd: state.gameEnd }))

    if ( state.gameEnd ) {
        return (
            <EndScreen />
        )
    } else if ( !state.gameEnd ){
        return (
            <div className={'main__body body--main'}>
                <MainPlayer />
                <div className={'body--main__content'}>
                    <GameArea />
                    <BirdInfo />
                </div>
                <NextButton />
            </div>
        )
    }

}