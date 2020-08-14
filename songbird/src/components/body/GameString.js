import React,{useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux"
import {selectBird} from "../../redux/action";

export default function GameString(props) {
    const state = useSelector((state) => ({
        buttonStyles: state.buttonStyles[props.index],
        rightBird: state.rightBird.name,
        roundComplete: state.roundComplete,
        clicked: state.clicked,
    }));

    const dispatch = useDispatch();
    const answer = props.birdInfo.name === state.rightBird;

    function clickHandler(){
        dispatch(selectBird( props.index, answer ))
        if(answer && !state.roundComplete && !state.clicked.includes(props.index)){
            let audio = new Audio(require('../../audio/success.mp3'))
            audio.play()
        }else if(!answer && !state.roundComplete && !state.clicked.includes(props.index)){
            let audio = new Audio(require('../../audio/failure.mp3'))
            audio.play()
        }
    }

    return (
        <div className={'area--game__container'} onClick={() => clickHandler()}>
            <div className={state.buttonStyles}/>
            <p className={'area--game__text'}>{ props.birdInfo.name }</p>
        </div>
    )
}
