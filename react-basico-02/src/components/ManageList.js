import React, { useState } from 'react'
import './list.css';

export const ManageList = () => {
const [product] = useState(["Abajur", "TV", "Sofá", "Compiuter"])

const [students, setStudents] = useState([
    { id: 0 , registraation: 1212121, name: "Gunguin", age: 21},
    { id: 1 , registraation: 2121212, name: "Mao Tse Tung", age:130},
    { id: 2 , registraation: 1111110, name: "Gustavo", age:12},
    { id: 3 , registraation: 2222220, name: "Bolsonaro JR", age: 27},
])

const deleteRandomStudent = () => {
    const randomNumber = Math.floor(Math.Random() * 5);
    setStudents((prevStudents) => {
        return prevStudents.filter((student) => 
            randomNumber !== student.id
        )
    });
}

  return (
    <div>
        <ul className='listaProdutos'>
            {product.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul className='listaStudents'>
            {students.map((student, i) => (
                <li key={i}>{student.name} ({student.age} anos)</li>
            ))}
        </ul>
        <button onClick={deleteRandomStudent}>MATE UM ESTUDANTE ALEAtORIAMENTE PelA REVOLUÇÃO AGRARIA</button>
    </div>
  )
}
