import React, { useState } from 'react'


export const ManageData = () => {
let someData = 10;    
const [number,setNumber] = useState(30) 

  return (
    <div>

        <div> <p> Valor: {number}</p></div>

        <button onClick={() => {
                                    setNumber(number + 1)
                                    //printf(number)
                                }
                            }> Coloque aqui seu valor! 

        </button>
    </div>
  )
}
