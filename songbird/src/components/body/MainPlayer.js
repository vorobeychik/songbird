import React from "react";
import { connect } from "react-redux"
import Player from "./Player";

function MainPlayer(props) {
    if(props.completed){
        return (
            <div className={'body--main__main--player player--main'}>
                <img src = {props.birdInfo.image} alt="" className={'player--main__img'}/>
                <div className={'player--main__content'}>
                    <div className={'player--main__container'}>
                        <p className={'player--main__text'}>{ props.birdInfo.name }</p>
                    </div>
                    <Player audio = {props.birdInfo.audio} />
                </div>
            </div>
        )
    }else{
        return ( <div className={'body--main__main--player player--main'}>
                    <img src={require('../../assets/bird.06a46938.jpg')} alt="" className={'player--main__img'}/>
                    <div className={'player--main__content'}>
                        <div className={'player--main__container'}>
                            <p className={'player--main__text'}>********</p>
                        </div>
                        <Player audio = {props.birdInfo.audio} />
                    </div>
                 </div>
        )
    }

}
const mapStateToProps = (state) => { return { birdInfo: state.rightBird , completed: state.roundComplete} }
export default connect(mapStateToProps, null)(MainPlayer)