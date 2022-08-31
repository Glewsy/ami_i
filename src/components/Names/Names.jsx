import React, {  useState } from 'react'
import Api from '../api'
const Names = ({ setPokeNumber, turn }) => {


  let [BringNames, setBringNames] = useState()  
  let namesbrought = []
  if (BringNames !== undefined) {
    BringNames.map((e) => namesbrought.push(e.name))
  }


  

  let selection = document.getElementById("selectpokemon")
  function Change(selection) {
    setTimeout(() => {
    setPokeNumber(selection.value)
    }, 400);
  }

  return (
    <select title='names' name="pokemon" id="selectpokemon" onChange={() => {
      turn()
      Change(selection)      
    }
    }>

      {namesbrought.map((e) => <option key={e} value={e}>{e = e[0].toUpperCase() + e.substring(1)}</option>)}
      <Api
      setBringNames={setBringNames}
      />
    </select>
  )
}

export default Names