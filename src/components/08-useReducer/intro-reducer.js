

const inicialState = [{
    id: 1,
    todo: 'Comprar leche',
    done: false
}];

const todoReducer = ( state = inicialState , action ) =>{
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }
    return state;
}


let todos = todoReducer();

// no utilizar el push 


const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}
// que tipo de acción es al reducer
const agregarTodo = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodo);
