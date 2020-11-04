import React, { useState, useMemo } from 'react'
import '../05-LayoutEffect/layout.css';
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado'


export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: { counter }</h3>
            <hr />
                <p>{ memoProcesoPesado }</p>
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
