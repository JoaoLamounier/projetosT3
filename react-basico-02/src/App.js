import React, { useState } from 'react';
import './App.css';
import { Pictures } from './components/Pictures'
import { ManageData } from './components/ManageData'
import { ManageList } from './components/ManageList'
import { ConditionalRendering } from './components/ConditionalRendering'
import { ShowUserData } from './components/ShowUserData'
import { ShowUserData2 } from './components/ShowUserData2'
import { ShowUserData3 } from './components/ShowUserData3'
import { ContainerComponent} from './components/ContainerComponent'
import { DoSomething } from './components/DoSomething';



const App = () => {
  const userAge =  22;
  const userCourse = "Ciencias da informação"
  const [students, setStudents] = useState([
        { id: 0 , registraation: 1212121, name: "Gunguin", age: 21, course: "ciencias da informação", semestre:1},
        { id: 1 , registraation: 2121212, name: "Mao Tse Tung", age:130, course: "ciencias da informação", semestre:4},
        { id: 2 , registraation: 1111110, name: "Gustavo", age:12, course: "ciencias da informação", semestre:1},
        { id: 3 , registraation: 2222220, name: "Bolsonaro JR", age: 27, course: "ciencias da informação", semestre:3},
    ])

    const writeMessage = () => {console.log("wololoooo")}


  return (
    <header  className='reactBase'>
        <div> <Pictures/> </div>
        <div> <ManageData/> </div>
        <div> <ManageList/> </div>
        <div> <ConditionalRendering/> </div> 
        <div> <ShowUserData name="Joao sem braço" age={userAge} course={userCourse} /> </div>
        <div> <ShowUserData2 name="Gustavo" age={24} course={userCourse} /> </div>
        <div> <ShowUserData2 name="Pedro" age={30} course={userCourse} /> </div>
        <div> <ShowUserData2 name="Maria" age={17} course={userCourse} /> </div>
        <div> <ShowUserData2 name="Virginia" age={20} course={userCourse} /> </div>
        <div> {students.map((student, i) => (
              <ShowUserData3
              key={students.id}
              name={students.name}
              age={students.age}
              course={students.course}/>
            ))} </div>
        <div> <ContainerComponent> 
          <p>Isto esta Containerizado!</p>
        </ContainerComponent></div>
        <div>
          <DoSomething>
            {writeMessage}
          </DoSomething>
        </div>

    </header> 
  )
}

export default App