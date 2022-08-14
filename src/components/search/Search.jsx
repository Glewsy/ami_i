import React from 'react'
import "./search.css"
const Search = ({ setPokeNumber,turn }) => {
    return (
        <form
            onSubmit={ev => {
                ev.preventDefault();
                if(ev.target.search.value > 898){return alert("Te excediste con el numero")}
                else if(ev.target.search.value < 1) {return alert("El minimo aceptable es 1")}
                else{
                if(ev.target.search.value ){
                  let eve =  ev.target.search.value.toLowerCase()
                    setTimeout(() => {
                        setPokeNumber(eve)
                        ev.target.search.value = ""
                    }, 1000);
                } else { alert("Escriba un nombre Correctamente")}}
            }}
            className='form_container' >
            <input
                className='form_input'
                name='search'
                autoComplete='off'
                id='input'
                placeholder='Enter a pokemon name // number(max 898)'
                type="text" />
            <button
                className='form_button'
                type='submit'
                onClick={()=>{
                    turn()
                }}
            ></button>
        </form>
    )
}

export default Search