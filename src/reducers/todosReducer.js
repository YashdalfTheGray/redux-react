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
}

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
            break;
        case 'REMOVE_COMPLETED_TODOS':
            return state.filter(todo => {
                if (!todo.completed) {
                    return todo;
                }
            });
            break;
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
            break;
        default:
            return state;
    }
};

export default todosReducer;
