import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/super-shoes.png";
import "./Home.css";
import RightArrow from "../images/216151_right_chevron_icon.png";
import { useGetData } from '../hooks/useGetData';


export const Home = () => {
  
    const url = "http://localhost:3000/products"
    const { data: items, loading, error } = useGetData(url);
    console.log(items);

    const handleLeftClick = (e) => {
    e.preventDefault()
  };
  
  const handleRightClick = (e) => {
    e.preventDefault()
  };
  
    return (
    <div>
        <h1>Sapataria f@da!</h1>
        <div className= "container">
            <div className='logo'>
                <img src={Logo} alt="Logo da marca super shoes" />
            </div>
            <div className='carousel'>
                {items && 
                 items.map ( (item) => (
                <div className='item' key={item.id}>
                    <div className='image'>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className='info'>
                        <span className='name'>{item.name}</span>
                        <span className='oldPrice'>R$ {item.oldPrice}</span>
                        <span className='price'>R$ {item.price}</span>
                    </div>
                    <p className='detalhes'>
                        <NavLink to= {'/products/${item.id}'}>detalhes</NavLink>
                    </p>
                </div>))}
            </div>
            <div className='buttons'>
                <button className='left_button' onClick={handleLeftClick}>
                    <img src={RightArrow} alt="scroll esquerda" />
                </button>
                <button className='right_button' onClick={handleRightClick}>
                    <img src={RightArrow} alt="scroll direita" />
                </button>
            </div>
        </div>
    <NavLink to = "/product"> Produtos </NavLink>
    </div>
  )
}
