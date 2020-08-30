import React from "react";
import MenuItem from "./menuIItem";

export default function Menu() {
    let menuItems = ['Разминка','Воробьиные', 'Лесные птицы','Певчие птицы','Хищные птицы','Морские птицы'];
    return (
        <div className={'header--main__menu'}>
            {menuItems.map((e,i) => <MenuItem buttonContent = {e} key = {i} index = {i}/>)}
        </div>
    )
}