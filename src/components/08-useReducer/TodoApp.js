import React, { useReducer } from 'react';
import { useEffect } from 'react';

import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }]

const init= () =>{
    // si hay todos traelos

    return JSON.parse(localStorage.getItem('todos')) || []; // retorna todos si hay o sino un arreglo vacio

    // return localStorage.getItem('todos');
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {

const [ todos , dispatch ] = useReducer(todoReducer, [], init); // el InitialState es el init y [] es lo que va a ser inicialmente





useEffect( () =>{ 
    localStorage.setItem('todos', JSON.stringify( todos )); // solo guarda string el localstorage
}, [todos] )


const handleDelete = (todoId) =>{
    console.log(todoId);
    // crear la action

    // const newTodoDelete = { así funciona
    //     id: todoId,
    //     desc: description,
    //     done: false
    //    };
    //    const actionDelete = {
    //        type: 'delete',
    //        payload: newTodoDelete
    //    }

    const action = {
           type: 'delete',
            payload: todoId
    }
    

    //dispatch
    dispatch(action);
//     dispatch(actionDelete);
 }


 const handleToggle = ( todoId ) =>{
     dispatch({
         type: 'toggle',
         payload: todoId
     })

 }

const handleAddTodo = ( newTodo ) =>{

    dispatch({
        type: 'add',
        payload: newTodo
    });
}

// console.log(description);

// const handleSubmit = (e) => {
//     e.preventDefault();

//     if( description.trim().length <= 1){
//         return;
//     }
//    const newTodo = {
//     id: new Date().getTime(),
//     desc: description,
//     done: false
//    };
  
//    reset();

// }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />
            <div className="row">
                <div className="col-7">
              
        {/* TodoList,  necesita los todos argumento enviado mediante prop, handleDelete, handleToggle */}
                    <TodoList 
                    todos={ todos}
                    handleDelete={ handleDelete} 
                    handleToggle={ handleToggle}
                    />
                        {/* <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i ) => (
                                    // TodoListItem, todo, index, handleDelate, handleToggle
                                <li
                                    key = { todo.id }
                                    className="list-group-item"
                                >
                                    <p className={ `${ todo.done && 'complete' }`}
                                    onClick={ () => handleToggle(todo.id)}
                                    >{ i + 1 }. { todo.desc }</p>
                                    <button
                                    className="btn btn-danger"
                                    onClick={ () => handleDelete(todo.id) }
                                    >
                                        Borrar
                                    </button>
                                    </li>
                                ))
                            }
                            </ul>  */}
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                    {/* <h4>Agregar Todo</h4>
                    <hr />
                    <form onSubmit={ handleSubmit }>
                    <input 
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        value={ description }
                        onChange={ handleInputChange }
                    />
                    
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1 btn-block"
                    >
                        Agregar
                    </button>
                    </form> */}
                </div>
            </div>
     
        </div>
    )
}
