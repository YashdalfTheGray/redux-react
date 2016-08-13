const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
            break;
        case 'DECREMENT':
            return state - 1;
            break;
        case 'RESET':
            return 0;
            break;
        default:
            return state;
    }
}

const counters = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return [...state, 0];
            break;
        case 'REMOVE_COUNTER':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            break;
        case 'INCREMENT':
            return [
                ...state.slice(0, action.index),
                counter(state[action.index], action),
                ...state.slice(action.index + 1)
            ];
            break;
        case 'DECREMENT':
            return [
                ...state.slice(0, action.index),
                counter(state[action.index], action),
                ...state.slice(action.index + 1)
            ];
            break;
        case 'RESET':
            return [
                ...state.slice(0, action.index),
                counter(state[action.index], action),
                ...state.slice(action.index + 1)
            ];
            break;
        default:
            return state;
    }
};

export default counters;
