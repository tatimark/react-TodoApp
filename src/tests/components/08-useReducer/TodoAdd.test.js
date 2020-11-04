import React from 'react';
import { shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';

describe('Pruebas en TodoAdd', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow( 
        <TodoApp
            handleAddTodo={ handleAddTodo }
        />
    )
    test('debe de mostrarse correctamente', () => {
            expect( wrapper).toMatchSnapshot();
    })

    // test('no debe de llamar handleAddtodo', () => {
        
    //     const formSubmit = wrapper.find('form').prop('onSubmit'); // hace referencia a una función
    //     formSubmit({ preventDefault(){} }); 
    //     expect( handleAddTodo ).toHaveBeenCalledTimes(0); // que haya sido llamado
    // })

    // test('debe de llamar la funcion handleAddTodo', () => {
    //    //con un argumento // called 
    //    const value = 'Aprender react';
    //    wrapper.find('input').simulate('change', {
    //        target:{
    //            value: value,
    //            name: 'description'
    //        }
    //    })

    //    const formSubmit = wrapper.find('form').prop('onSubmit'); // hace referencia a una función
    //     formSubmit({ preventDefault(){} }); 
    //     expect( handleAddTodo ).toHaveBeenCalledTimes(1);
    //     expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object)); // {}
    //     expect( handleAddTodo ).toHaveBeenCalledWith( {
    //         id: expect.any(Number),
    //         desc:value,
    //         done: false
    //     });

    //     expect(wrapper.find('input').prop('value')).toBe('');
    //     })





})