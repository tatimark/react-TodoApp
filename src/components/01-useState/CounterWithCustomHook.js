import React from 'react'
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 100 );

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />
            <button className="btn btn-primary" onClick={ () => increment(2) } > + 1</button>
            <button className="btn btn-primary" onClick={ () => decrement(2) } > - 1</button>
            <button className="btn btn-primary" onClick={ reset } > Reset</button>
        </>
    )
}

// hacer el reset que limpie y coja el estado inicial