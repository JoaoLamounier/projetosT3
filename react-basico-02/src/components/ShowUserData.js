import React from 'react'

export const ShowUserData = (props) => {
  return (
    <div> <h2> Nome do Estudante: {props.name}, idade {props.age} anos cursando {props.course}</h2></div>
  )
}
