
import {  useEffect, useState } from 'react';
import './App.css';
import Card from "./components/card/Card"


function App() {


  const [pokeNumber, setPokeNumber] = useState("pikachu");
  const [pokeball, setPokeball] = useState();



  const api = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`


  useEffect(() => {
    (async function () {
     await fetch(api)
     .then((res) => res.json())
     .then((a)=>setPokeball(a))
     .catch((e)=>console.log(e));
    })();
  }, [api])
  


  return (
    <main className='main'> 
      { pokeball? 
        <Card
        pokeball={pokeball}
        setPokeNumber={setPokeNumber} 
        />
        : "loading"
      }
    </main>
  );
}

export default App;
