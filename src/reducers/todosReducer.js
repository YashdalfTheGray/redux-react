import { combineReducers } from 'redux';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
            break;
        default:
            return state;
    }
}

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
            break;
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            else {
                return {
                    ...state,
                    completed: !state.completed
                };
            }
            break;
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
            break;
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
            break;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;
