import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading , data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0]; // si viene la data, osea si es true entonces en la posición 0 sino esas dos variables tendran un undefind
    // !null daría true con lo cual no habría data , si pones !!null sería false con lo cual si habría data por eso se pone !!data
    // console.log(autor, quote);
    return ( 
    <div>
        <h1> BreakingBad Quotes</h1> 
        <hr />

        {
            loading
            ?
            (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            )
            :
            (
                <blockquote className="blockquote text-right">
                <p className="mb-0">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
                </blockquote>
            )

        }
        <button 
        className="btn btn-primary"
        onClick={ increment }>
            Siguiente quote...
        </button>
   

    </div>
    )
}