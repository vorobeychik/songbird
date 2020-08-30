import birdsData from "../data/birdsData";
import {CHANGE_ROUND, SELECT_BIRD, END__GAME, NEW__GAME} from "./types";

const initialState = {
    birdsData: birdsData[0],
    rightBird: birdsData[0][ randomInteger(0,5) ],
    selectedBird: {},
    round:0,
    roundComplete: false,
    score:0,
    addingScore:5,
    clicked:[],
    buttonStyles: new Array(6).fill('area--game__circle'),
    gameEnd:false,
};



export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ROUND:
            let rightBird =  birdsData[state.round + 1][ randomInteger(0,5) ]
            console.log(rightBird.name)
            return {...state,
                    round: state.round + 1,
                    birdsData: birdsData[state.round + 1],
                    selectedBird: {},
                    rightBird: rightBird,
                    roundComplete: false,
                    addingScore:5,
                    clicked:[],
                    buttonStyles: new Array(6).fill('area--game__circle'),
            };
        case SELECT_BIRD:
            let addingScore = state.addingScore;
            let score = state.score;
            let  complete = true;
            let buttonStyles = state.buttonStyles;

            if(!state.roundComplete){
                complete = state.rightBird.name === state.birdsData[ action.payload.indexOfBird].name
            }
            if(state.rightBird.name === state.birdsData[ action.payload.indexOfBird].name && !state.roundComplete){
                score += addingScore
            }else if(state.rightBird.name !== state.birdsData[ action.payload.indexOfBird].name && !state.clicked.includes(action.payload.indexOfBird)){
                addingScore -= 1
            }
            if(action.payload.rightBird && !state.roundComplete ){
                buttonStyles.splice(action.payload.indexOfBird,1,'area--game__circle area--game__circle__success');
            }else if(!action.payload.rightBird && !state.roundComplete){
                buttonStyles.splice(action.payload.indexOfBird,1,'area--game__circle area--game__circle__error');
            }
            return {...state,
                    selectedBird: state.birdsData[ action.payload.indexOfBird],
                    roundComplete: complete,
                    addingScore,
                    score,
                    clicked: state.clicked.concat([action.payload.indexOfBird]),
                    buttonStyles,
            };
        case END__GAME:
            return {
                ...state,
                gameEnd: true,
            };
        case NEW__GAME:
            return {
                birdsData: birdsData[0],
                rightBird: birdsData[0][ randomInteger(0,5) ],
                selectedBird: {},
                round:0,
                roundComplete: false,
                score:0,
                addingScore:5,
                clicked:[],
                buttonStyles: new Array(6).fill('area--game__circle'),
                gameEnd:false,
            }
        default:
            return state;
    }
}



function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.abs(Math.round(rand));
}
