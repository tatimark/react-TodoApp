import React, { useState } from 'react'
import '../05-LayoutEffect/layout.css';
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, increment } = useCounter( 10 );
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter: <Small value={ counter } /></h1>
            <hr />
            <button className="btn btn-primary" onClick={ increment }>
                +1
            </button>
            <p></p>
            <button 
            className="btn btn-outline-primary ml3"
            onClick={ () =>{
                setShow( !show ); //lo opuesto de show
            } }
            >
                Show/hide { JSON.stringify( show ) } 
            </button>
            
        </div>
    )
}
