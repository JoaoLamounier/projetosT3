import React, { useState } from 'react'
export const ShowUserData3 = ({key, name, age, course}) => {

  return (
    <div>
        <h2>Estudantes e etc</h2>
        <h3><ul>
            <li>Nome: {name}</li>  
            <li>idade: {age}</li>  
            <li>cursando {course}</li>  
            <li>{}</li>    
        </ul></h3>
    </div>
  )
}
