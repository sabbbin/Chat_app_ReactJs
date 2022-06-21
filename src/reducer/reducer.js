import {ActionTypes} from '../action/action'

export const SearchReducer=(state={counter:0}, action)=>{
    switch(ActionTypes){
        case ActionTypes.Set_counter:
            return ({
                ...state,
                cunter:action.payload
            })
        default:
            return ({
                ...state
            })
    }

}