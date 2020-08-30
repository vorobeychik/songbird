import React from "react";
import {connect} from "react-redux"

function Score(props) {
    return (
        <div className={'header--main__score'}>
            Score:{props.score}
        </div>
    )
}
export default connect((state) => {return {score:state.score}},null)(Score)