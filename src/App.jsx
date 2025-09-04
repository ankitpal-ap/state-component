import { useState } from 'react'
import { sculptureList } from "./data";

import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function handlNext(){
    setIndex((index + 1) % sculptureList.length)
    setShowMore(false)
  }  
   function handlePrev(){
    setIndex((index - 1 +sculptureList.length) % sculptureList.length)
    setShowMore(false)
  }

  function handleImageClick(){
    setShowMore(!showMore) 
  } 

   let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlNext}>next</button>
      <button onClick={handlePrev}>revers</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url}
        alt={sculpture.alt}
        onClick={handleImageClick}
        style={{cursor: "pointer", maxWidth: "300px", borderRadius: "8px"}}
          
      /> 
      <br></br>
      <button onClick={handleImageClick}>
        {showMore ? "Hide" : 'Show'} details
      </button>
        {showMore && <p>{sculpture.description}</p>}
    </>
  );
}


export default App;

