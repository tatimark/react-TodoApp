import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../fixtures/demoTodos';

describe('Pruebas en TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();


    const wrapper = shallow( <TodoListItem 
    todo={demoTodos[0]}
    index={0}
    handleDelete={ handleDelete}
    handleToggle={ handleToggle}
    /> );
    test('debe de mostarse correctamente ', () => {
        //snaptshot
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar la función handleDelete', () => {
        //jest.fn toHaveBeenCAlledWith
        wrapper.find('button').simulate('click');
        expect( handleDelete).toHaveBeenCalledWith( demoTodos[0].id );
     
    })

    test('debe de llamar la función handletoggle', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle).toHaveBeenCalledWith( demoTodos[0].id );
     
    })

    test('debe de mostrar el texto correctamente', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`${ 0 + 1 }. ${ demoTodos[0].desc }`);

     
    })


    test('debe de mostrar la clase complete', () => {

        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow( <TodoListItem 
            todo={ todo }
            /> );
            console.log(wrapper.html());
            expect(wrapper.find('p').hasClass('complete')).toBe(true); //que tenga esa clase

     
    })

})