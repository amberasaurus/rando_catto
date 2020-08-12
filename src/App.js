import React, { useState } from 'react';
import './App.css';
import RandomCatService from './RandomCatService';
import Cat from './Cat';

const App = ({catName}) => {

  const meows = ['meow.wav', 'meow2.wav', 'meow3.mp3', 'meow4.wav', 'meow5.wav'];
  const [addedCats, setAddedCats] = useState([]);

  const sayHello = () => {
    const rand = Math.floor((Math.random() * 5));
    const rando = meows[rand];
    const audio = new Audio(rando);
    audio.play();
    // api key 563492ad6f917000010000010fbfa80c6d554b588eae0d5aee13f840 
    setAddedCats([...addedCats, RandomCatService.addCat()]);
  }

  console.log(addedCats);
  return (
    <div className="App">
      <button type="button" className="meow-btn" onClick={sayHello}>Meow</button>
      <div>
        {addedCats.map((cat, index) => <div key={index}><Cat cat={cat}/></div> )}
      </div>
    </div>
  );
}

export default App;
