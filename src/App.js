import React from 'react';
import WordCard from './WordCard'
import './App.css';

const wordcollect = ["Hello","Gelly","Dollar","Wallet"];
const randomWord = wordcollect[Math.floor(Math.random()*wordcollect.length)];

function App() {
   function refreshPage() {
      window.location.reload(false);
   }
   return (
   <div>
      <WordCard value={randomWord}/>
      <button onClick={refreshPage}>Reset</button>
 
   </div>
 );
}
export default App;