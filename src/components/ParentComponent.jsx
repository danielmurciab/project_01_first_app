import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

export const ParentComponent = () => {

    //Definir un estado local con un mensaje
    const [ message, setMessage ] = useState("¡Hola desde el componen Padre!!");
    const [response, setResponse] = useState();

    //Función para recibir la respuesta del hijo
    const handleChildResponse = (childMessage) =>{
        setResponse(childMessage);
    }

  return (
    <div className='parent'>
        <h2>Parent Component</h2>
        <ChildComponent message={message} onRespond={handleChildResponse}/>
        {response}
    </div>
  )
}
