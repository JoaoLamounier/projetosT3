import React, { useState } from 'react'

export const ConditionalRendering = () => {
    const [test] = useState(false);
    const [place] = useState("UDESC");
    const alternatePlace = () => {
     
    }

    return (
    <div>
        <h1>Isto esta sendo visto?</h1>
        {test && <p>se for verdadeiro sim</p>}
            
    
    {place === "UFSC" ? (
      <p> O local é a ufsc</p>
    ) : (
      <p> O local não é a ufsc</p>
    )}
    <button onClick={alternatePlace}> </button>
    </div>
  )
}



export default ConditionalRendering;