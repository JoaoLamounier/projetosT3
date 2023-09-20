import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product';

function App() {
  return (
    <div className="App">
      <h1>Projeto roteamento</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/product' element = {<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
