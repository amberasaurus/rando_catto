import React, { useState } from 'react';
import './App.css';
import RandomCatService from './services/RandomCatService';
import Cat from './components/Cat';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

const App = ({catName}) => {

  const meows = ['meow.wav', 'meow2.wav', 'meow3.mp3', 'meow4.wav', 'meow5.wav'];
  const [addedCats, setAddedCats] = useState([]);
  const [error, setError] = useState(null);

  const addMoreCats = async () => {
    const rand = Math.floor((Math.random() * 5));
    const rando = meows[rand];
    const audio = new Audio(rando);
    audio.play();
    try {
      let cat = await RandomCatService.addCat();
      setError(null);
      setAddedCats([...addedCats, cat]);
    }
    catch(error){
        setError("Error fetching more cats, please try again!");
        console.error(error.message);
    }
  }

  const save = () => {
    htmlToImage.toBlob(document.getElementById('cat-background'), {width: window.innerWidth, height: window.innerHeight})
    .then(blob => {
      setError(null);
      saveAs(blob, "cat-background.png");
    }).catch(error => {
      setError("Error saving image, please try again!");
      console.error(error.message);
    });
  }

  const clear = () => {
    setAddedCats([]);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="add-cats">
        <button type="button" className="btn meow-btn" onClick={addMoreCats}>Add More Cats</button>
        </div>
        <div className="right-buttons">
          <button type="button" className="btn clear-btn" onClick={clear}>Clear</button>
          <button type="button" className="btn save-btn" onClick={save}>Save</button>
        </div>
      </div>
      {error !== null && 
       <div>
         <h3>{error}</h3>
      </div>  
       }
      <div id="cat-background">
        {addedCats.map((cat, index) => <div key={index}><Cat cat={cat}/></div> )}
      </div>
      <div className="footer">
        <div>
          <a href="https://www.pexels.com" className="link">Photos provided by Pexels</a>
        </div>
        <div>
          <a href="https://freesound.org" className="link">Sounds provided by Freesound</a>
        </div>
      </div>
      
  </div>
  );
}

export default App;
