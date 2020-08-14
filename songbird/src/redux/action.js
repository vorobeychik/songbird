import {CHANGE_ROUND, SELECT_BIRD, END__GAME, NEW__GAME} from "./types";

export function nextRound() {
    return {
        type: CHANGE_ROUND,
    }
}

export function selectBird(indexOfBird,rightBird) {
    return{
        type: SELECT_BIRD,
        payload: {indexOfBird,rightBird},

    }
}

export function endGame() {
    return {
        type: END__GAME
    }
}

export function newGame() {
    return {
        type: NEW__GAME
    }
}
