import React, { useEffect, useState } from 'react'
const Names = ({ setPokeNumber, turn }) => {


  let [BringNames, setBringNames] = useState()


  let api = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=900";

  useEffect(() => {

    fetch(api)
      .then((res) => res.json())
      .then((a) => setBringNames(a.results))
      .catch((e) => console.log(e));
  }, [api])
  let namesbrought = []
  if (BringNames !== undefined) {
    BringNames.map((e) => {
      return namesbrought.push(e.name)
    })
  }
  let selection = document.getElementById("selectpokemon")
  function cambia() {
    setPokeNumber(selection.value)
  }

  return (
    <select title='names' name="pokemon" id="selectpokemon" onChange={() => {
      turn()
      setTimeout(() => {
        cambia()
      }, 400);
    }
    }>

      {namesbrought.map((e) => <option key={e} value={e}>{e = e[0].toUpperCase() + e.substring(1)}</option>)}
    </select>
  )
}

export default Names