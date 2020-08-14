import React from "react";
import Menu from "./menu";
import Score from "./score";

export default function Header() {
    return (
        <div className={'main__header header--main'}>
            <div className={'header--main__container'}>
                <h1 className={'header--main__logo'}>
                    <span className={'header--main__span'}>Song</span>Bird
                </h1>
                <Score />
            </div>

            <Menu />
        </div>
    )
}