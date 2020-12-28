import React, { useState } from 'react';
import './App.css';
import RandomCatService from './services/RandomCatService';
import Cat from './components/Cat';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

const App = ({catName}) => {

  const meows = ['meow.wav', 'meow2.wav', 'meow3.mp3', 'meow4.wav', 'meow5.wav'];
  const [addedCats, setAddedCats] = useState([]);

  const addMoreCats = async () => {
    const rand = Math.floor((Math.random() * 5));
    const rando = meows[rand];
    const audio = new Audio(rando);
    audio.play();
    try {
      let cat = await RandomCatService.addCat();
      setAddedCats([...addedCats, cat]);
    }
    catch(error){
        //something wrong http
    }
  }

  const save = () => {
    htmlToImage.toBlob(document.getElementById('cat-background'), {width: window.innerWidth, height: window.innerHeight})
    .then(function (blob) {
      saveAs(blob, "cat-background.png");
    });
  }

  const clear = () => {
    setAddedCats([]);
  }

  return (
    <div className="App">
      <div class="header">
        <button type="button" className="btn meow-btn" onClick={addMoreCats}>Add More Cats</button>
        <button type="button" className="btn clear-btn" onClick={clear}>Clear</button>
        <button type="button" className="btn save-btn" onClick={save}>Save</button>
      </div>
      <div id="cat-background">
        {addedCats.map((cat, index) => <div key={index}><Cat cat={cat}/></div> )}
      </div>
      <div class="footer">
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
