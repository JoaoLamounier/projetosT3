import React from 'react'

export const ContainerComponent = ({children}) => {
  return (
    <div>
    <h1>Este é meu componente container</h1>
    {children}
    </div>
  )
}
