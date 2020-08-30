import React from "react";
import {connect} from 'react-redux'
import Player from "./Player";

function BirdInfo(props) {
    if ( Object.keys(props.birdInfo).length === 0 ){
        return (
            <div className={'container'}>
                <div className={'body--main__bird--info'}>
                    <p className={'body--main__text'}>
                        Послушайте плеер.
                        Выберите птицу из списка</p>
                </div>
            </div>
        )
    } else {
        return (<div className={'container'}>
                <div  className={'body--main__bird--info info--bird'}>
                    <div className={'info--bird__container'}>
                        <img className={'info--bird__image'}  src={`${props.birdInfo.image}`}/>
                        <div className={'info--bird__content'}>
                            <div className={'info--bird__name--container'}>
                                <p className={'info--bird__name'}>{ props.birdInfo.name }</p>
                            </div>
                            <div className={'info--bird__latin--name--container'}>
                                <p className={'info--bird__latin--name'}> {props.birdInfo.species }</p>
                            </div>
                            <Player audio = { props.birdInfo.audio}/>
                        </div>
                    </div>
                    <p className={'info--bird__description'}>{ props.birdInfo.description }</p>
                </div>
                </div>
        )

    }

}

export default connect((state) => { return {birdInfo: state.selectedBird} },null)(BirdInfo)