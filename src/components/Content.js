import React, { useState, useEffect } from 'react';
import '../index.css';

function Content() {
  // const [memeImage, setMemeImage] = useState('');

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  // Set memes into an empty array
  const [allMemes, setAllMemes] = useState([]);

  // Fetch images from API
  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleClick() {
    // Generate random numbers to select random meme
    const random = Math.floor(Math.random() * allMemes.length);
    // set the new meme image to the url of a random # from the meme array
    const url = allMemes[random].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  // Changes the value of the name the user changes
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className='content-container'>
      <div className='input-container'>
        <input
          type='text'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type='text'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className='meme-button' onClick={handleClick}>
        Get a new image
      </button>

      {/* Displaye the new image passed as the state with the top and bottom text*/}
      <div className='full-meme'>
        <img className='meme' src={meme.randomImage} />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Content;
