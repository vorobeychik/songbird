import React from "react";
import {connect} from 'react-redux'

const  MenuItem = (props) => {
    return (
        <p className={props.index === props.activeItem ? 'header--main__menu--item header--main__menu--item__active':'header--main__menu--item'}>
            {props.buttonContent}
        </p>
    )
}

const mapStateToProps = (state) => ({activeItem: state.round});
export default connect(mapStateToProps,null)(MenuItem)