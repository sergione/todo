import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function todosReducer(state = initialState.todos, action) {
    switch (action.type) {

        case types.LOAD_TODOS_SUCCESS:
            return action.todos;

        case types.CREATE_TODO_SUCCESS:
            return [
                ...state,
                action.todo
            ];

        case types.UPDATE_TODO_SUCCESS:
            let updateState = [...state];
            updateState.splice(updateState.findIndex(todo => todo.id === action.todo.id), 1, action.todo);
            return updateState;

        case types.DELETE_TODO_SUCCESS:
            return [...state.filter(todo => todo.id !== action.id)];
            
        case types.COMPLETE_TODO_SUCCESS:
            let newState = [...state];
            newState.splice(newState.findIndex(todo => todo.id === action.todo.id), 1, action.todo);
            return newState;

        default:
            return state;
    }
}