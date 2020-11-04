import React from 'react';
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch'); // simulación de usefetch
jest.mock('../../../hooks/useCounter');
describe('Pruebas en MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('debe de mostrarse correctamente ', () => {

        useFetch.mockReturnValue({ // el inicio
            data:null,
            loading: true,
            error: null
        });

        const wrapper = shallow( < MultipleCustomHooks /> );
        expect(wrapper).toMatchSnapshot();

    })


    test('debe de mostrarse la información cuando se tiene algo', () => {

       //useFetch nos interesa la información que va a retornar

       useFetch.mockReturnValue({ // lo que tendría
                data:[{
                    author: 'Fernando',
                    quote: 'Hola mundo'
                }],
                loading: false,
                error: null
            });

            const wrapper = shallow( < MultipleCustomHooks /> );

            expect( wrapper.find('.alert').exists()).toBe(false); //busca la clase alert no debería de existir si yo tengo información, no debería de existir
            expect( wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
            expect( wrapper.find('footer').text().trim()).toBe('Fernando');
            // console.log( wrapper.html())

    })

})