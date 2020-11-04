import React, { useState, useCallback, useEffect } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    console.log('me volvi a generar');

    const [counter, setCounter ] = useState(10);

    // const increment = () =>{
    //     setCounter( counter + 1);
    // }

    // const increment = useCallback(
    //     (num) => {
    //         setCounter( c => c + num);
    //     },[ setCounter ] );

        const increment = useCallback( (num) => {
                setCounter( c => c + num);
            },[ setCounter ] );

    useEffect( () =>{
        //????
    }, [ increment ])

    return (
        <div>
            <h1>Call Back Hook { counter }</h1>
            <hr />
            <ShowIncrement increment={ increment }/>
        </div>
    )
}


// React.memo = se usa para memorizar un valor cuando el argumento de la función encerrada en ( ) es el mismo/no cambia.

// useMemo() = se usa para memorizar un valor cuando una o mas dependencias mantienen su valor/no cambian. El primer argumento es la función/callback que se vuelve a ejecutar si estas dependencias cambian. Devuelve una forma memorizada de la función.

// useCallback() = se usa para mantener la referencia a una función (se puede decir que se mantiene la posición de memoria de esa función) siempre que sus dependencias se mantengan/no cambien. Devuelve una versión memorizada de la función que se le coloque, que será usada en otros lugares del código.

