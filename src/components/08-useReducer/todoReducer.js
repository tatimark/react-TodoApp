export const todoReducer = (state = [], action) => {

        switch (action.type) {
            case 'add':

                return [...state, action.payload];

            case 'delete':
                return state.filter(todo => todo.id !== action.payload); //payload 123535 action.payload.id regresa un nuevo arreglo


            case 'toggle':
                    return state.map( todo =>
                        (todo.id === action.payload) //ternario
                        ?{...todo, done: !todo.done }
                        : todo
                    );

            case 'toggle-old':
                return state.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    } else {
                        return todo; // hay que regresar algo para que no haya undefind
                    }

                })

            default:
                return state;
        }
    }