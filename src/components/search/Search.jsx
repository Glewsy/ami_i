import React from 'react'
import "./search.css"
const Search = ({ setPokeNumber,turn }) => {
    return (
        <form
            onSubmit={ev => {
                ev.preventDefault();
                if(ev.target.search.value){
                    setTimeout(() => {
                        setPokeNumber(ev.target.search.value)
                        ev.target.search.value = ""
                    }, 1600);
                } else { alert("Escriba un nombre Correctamente")}
            }}
            className='form_container' >
            <input
                className='form_input'
                name='search'
                autoComplete='off'
                id='input'
                placeholder='Enter a pokemon name or a pokemon number'
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