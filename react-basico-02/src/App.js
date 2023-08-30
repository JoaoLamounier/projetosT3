import React from 'react';
import './App.css';
import { Pictures } from './components/Pictures'
import { ManageData } from './components/ManageData'
import { ManageList } from './components/ManageList'
import { conditionalRendering } from './components/conditionalRendering';

const App = () => {
  return (
    <header  className='reactBase'><div>
        <div> <Pictures/> </div>
        <div> <ManageData/> </div>
        <div> <ManageList/> </div>
        <div> <conditionalRendering/> </div>
    </div></header>
  )
}

export default App