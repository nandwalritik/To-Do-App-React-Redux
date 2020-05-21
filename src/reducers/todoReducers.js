import * as actionType from '../actions/actionTypes';
const initialState={
    todos:[],
    todo:{}
};

export default function(state=initialState,action){
    // console.log(action.payload);
    if(action.type === actionType.ADD_TO_DO){
        return {...state,todo:
                    action.payload     
            };
    }    
    if(action.type === actionType.FETCH_TO_DOS){
        return {...state,todos:action.payload};
    }
    if(action.type === actionType.DEL_TO_DO){
        return{...state,todos:state.todos.filter(todo => todo._id!==action.payload)}
    }
    if(action.type === actionType.TOGGLE_TO_DO){
        return{...state,todos:state.todos.map(todo => {
            if(todo._id === action.payload._id){
                // console.log("Done");
                todo=action.payload
            }
            return todo;
        })}
    }
    if(action.type === actionType.UPDATE_TO_DO){
        return{...state,todos:state.todos.map(todo =>{
            if(todo._id === action.payload._id){
                todo=action.payload
            }
            return todo;
        })}
    }
     return state;           
    }
