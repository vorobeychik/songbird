import React from "react";
import {connect} from  "react-redux"
import {nextRound,endGame} from "../../redux/action";
const NextButton = (props) => {
    function clickHandler() {
       if(props.round === 5){
           props.endGame()
       }else if(props.complete) {
           props.nextRound()
       }
    }

    return (
        <div>
            <button className={props.complete ?'next--round__button next--round__button__active' : 'next--round__button'}
                    onClick={() => clickHandler()}>Next Level</button>
        </div>
    )
};

const mapDispatchToProps = {
    nextRound,endGame
};

export default connect((state) => ({ complete: state.roundComplete, round: state.round }),mapDispatchToProps)(NextButton)