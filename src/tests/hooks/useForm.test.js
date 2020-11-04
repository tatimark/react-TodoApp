import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';



describe('', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;




        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

        //toEqual
    });

    test('debe de cambiar el valor del formulario cambiar name', () => { //simular una acción

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        //toEqual

        act(() => { //hacer una acción dentro de ese hook
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'melissa'
                }
            });
        });

        const [formValues] = result.current;
        expect(formValues).toEqual({...initialForm, name: 'melissa' })

    });

    test('debe de establecer el formulario con reset', () => { //simular una acción


        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;
        //toEqual
        act(() => {
            // handleInputChange({
            //     target: {
            //         name: 'name',
            //         value: 'melissa'
            //     }
            // });

            reset()
        });

        const [formValues] = result.current;

        expect(formValues).toEqual(initialForm);
    })


})