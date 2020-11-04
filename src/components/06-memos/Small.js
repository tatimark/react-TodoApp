import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('me volvi a llamra :(');
//prevenir que este componente se vuelva a renderizar si sus properties son las mismas
//tenemos el componenete que queremos memorizar
    
    return (
      
            <small>{ value }</small>
     
    )
}
)
