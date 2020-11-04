import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';




describe('Pruebas en useCounter', () => {
    test('debe de retornar valores por defecto ', () => {

        const { result } = renderHook( () => useCounter()) // renderizar el hook

        console.log( result.current );
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    })



    test('debe de retornar el counter 100', () => {

        const { result } = renderHook( () => useCounter(100)) // renderizar el hook

   
        expect( result.current.counter ).toBe(100);
    
    })


    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter(100)) // renderizar el hook
        const { increment } = result.current;

        act( () =>{ //hacer una acción dentro de ese hook
            increment()
        });

        const { counter } = result.current;
        expect( counter ).toBe(101);
    
    })

    test('debe de decrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter(100)) // renderizar el hook
        const { decrement } = result.current;

        act( () =>{ //hacer una acción dentro de ese hook
            decrement()
        });

        const { counter } = result.current;
        expect( counter ).toBe(99);
    
    })


    test('debe de resetear  valor 100', () => {

        const { result } = renderHook( () => useCounter(100)) // renderizar el hook
        const { decrement, reset } = result.current;

        act( () =>{ //hacer una acción dentro de ese hook
            decrement();
            reset();
        });

        const { counter } = result.current;
    
        expect( counter ).toBe(100);
    
    })



    


})