
const redux = require('redux')

const createStore = redux.createStore

const combin=redux.combineReducers
//create an action

const BUY_CAKE="BUY_CAKE"
const BUY_ICE="BUY_ICE"
//function return an action 
function BUYCAKE(){        
    return {
        type: BUY_CAKE,
        info:'first redux action'
    }
}

function BUYICE(){        
    return {
        type: BUY_ICE,
        info:'first redux action'
    }
}

//create reducer

const initialStateCake= {
    numofcakes:10
}
const initialStateIce= {
    numofIces:20
}
const reducerCake=(state=initialStateCake,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,  //make a copy of state then update just the numofcakes
            numofcakes: state.numofcakes-1,
        }
        default : return state
    }

}

const reducerIce=(state=initialStateIce,action)=>{
    switch(action.type){
        case BUY_ICE:return{
            ...state,  //make a copy of state then update just the numofcakes
            numofIces: state.numofIces-1,
        }
        default : return state
    }

}

//redux store 
//holding the application state

const rootReducer = combin({
    cake:reducerCake,
    ice:reducerIce
})

const store = createStore(rootReducer)
console.log('initial state', store.getState())

const unsubscribe= store.subscribe(()=>{console.log('updated state ', store.getState())})

store.dispatch(BUYCAKE())
store.dispatch(BUYCAKE())

store.dispatch(BUYICE())
store.dispatch(BUYICE())
unsubscribe()