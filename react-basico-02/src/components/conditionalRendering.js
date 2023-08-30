import React, { useState } from 'react'

export const conditionalRendering = () => {
    const [test] = useState(true);


    return (
    <div>
        <h1>Isto esta sendo visto?</h1>
        {test && <p>se for verdadeiro simS</p>}
            
    </div>
  )
}
