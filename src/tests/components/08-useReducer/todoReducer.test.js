import React from 'react';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../fixtures/demoTodos';


describe('pruebas en todoreducer', () => {


    test('debe de retornar el estado por defecto', () => {
        
        const state = todoReducer( demoTodos, {});
        expect( state).toEqual(demoTodos);

    })


    test('debe de agregar un todo', () => {
        //crear nuevo estado pero vamos a mandae una acción para que se haga el add
        //3 elementos es lo que vamos a recibir

        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }
        
         const state = todoReducer( demoTodos, action);
         expect( state.length ).toBe(3);
         expect( state ).toEqual([...demoTodos, newTodo]);

    })


    test('debe de borrar un todo', () => {
        //action.payload = ID del Todo
     
        // const newTodo = {
        //     id: 3,
        //     desc: 'Aprender Express',
        //     done: false
        // };

        const action = {
            type: 'delete',
            payload: 1
        }
        
         const state = todoReducer( demoTodos, action);
         expect( state.length ).toBe(1);
         expect( state ).toEqual([ demoTodos[1]]);
     

    })



    test('debe de cambiar el valor del todo', () => {
        //debe de hacer el toggle del todo



        const action = {
            type: 'toggle',
            payload: 1
        }
        
         const state = todoReducer( demoTodos, action);
         expect( state[0].done ).toBe(true);
         expect( state[1] ).toEqual(demoTodos[1]);
     
     
     

    })
    
})
