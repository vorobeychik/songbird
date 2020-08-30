import React from "react";
import {connect} from 'react-redux'
import GameString from "./GameString";


const GameArea = (props) => {
    return (
        <div className={'body--main__game--area area--game'}>
            {props.birds.map((e, i) => <GameString key = { i } birdInfo = {e} index = { i }/>)}
        </div>
    )
};

const  mapSateToProps = (state) => ({ birds: state.birdsData });

export default connect(mapSateToProps,null)(GameArea)

