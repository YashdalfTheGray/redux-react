const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
            break;
        case 'REMOVE_TODO':
            return state.filter(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
            });
            break;
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                else {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
            });
            break;
        default:
            return state;
    }
};

export default todoReducer;