import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {newGame} from "../../redux/action";

export default function EndScreen() {
    const dispatch = useDispatch();
    const state = useSelector((state) => ({score: state.score}))

    return (
        <div className={'main__end--screen screen-end'}>
            <h2 className={'screen-end__title'}>Поздравляем !</h2>
            <p className={'screen-end__text'}> Вы прошли вмкторину и набрали {state.score} из 30 возможных</p>

            {
                state.score === 30 ? <p className={'screen-end__text'}> Вы набрали максималльный бал вы занток птиц !!!!!!
                   Написать птице @Ptica_vorobey</p>:''
            }
            <button className={'screen-end__button'} onClick={() => dispatch( newGame())}>Попробовать еще раз!</button>
        </div>
    )
}