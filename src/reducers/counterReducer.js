const counterReducer = (state = [], action) => {
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
                state[action.index] + 1,
                ...state.slice(action.index + 1)
            ];
            break;
        case 'DECREMENT':
            return [
                ...state.slice(0, action.index),
                state[action.index] - 1,
                ...state.slice(action.index + 1)
            ];
            break;
        case 'RESET':
            return [
                ...state.slice(0, action.index),
                0,
                ...state.slice(action.index + 1)
            ];
            break;
        default:
            return state;
    }
};

export default counterReducer;
