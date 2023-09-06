import React from 'react'

export const ShowUserData2 = ({name, age, course}) => {
  return (
    <div>
        <h1>Informaçoes do estudante</h1>
        <h3><ul>
            <li>Nome: {name}</li>  
            <li>idade: {age}</li>  
            <li>cursando {course}</li>  
            <li>{}</li>    
        </ul></h3>
        </div>
  )
}
