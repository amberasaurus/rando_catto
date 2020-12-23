import React from 'react';   
import './Cat.css';

const Cat = props => {  
    return (
        <img className="cat-img" src={props.cat.url} alt="A random cat" 
        style={{transform: `translate(${props.cat.x}px, ${props.cat.y}px) rotate(${props.cat.angle}deg)`}} />        
    ); 
};
export default Cat;