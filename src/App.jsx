
import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Card from "./components/card/Card"


function App() {


  const [pokeNumber, setPokeNumber] = useState(1);
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
    <Fragment> 
      { pokeball? 
        <Card
        pokeball={pokeball}
        pokeNumber={pokeNumber}
        setPokeNumber={setPokeNumber} 
        />
        : "loading"
      }
      
    </Fragment>
  );
}

export default App;
