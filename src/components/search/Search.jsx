import React from 'react'
import "./search.css"
const Search = ({ setPokeNumber }) => {
    return (
        <form
            onSubmit={ev => {
                ev.preventDefault();
                if(ev.target.search.value){
                    setPokeNumber(ev.target.search.value)
                    ev.target.search.value = ""
                } else { alert("Escriba un nombre Correctamente")}
            }}
            className='form_container' >
            <input
                className='form_input'
                name='search'
                autoComplete='off'
                id='input'
                placeholder='Write a Pokemon Name'
                type="text" />
            <button
                className='form_button'
                type='submit'
            ></button>
        </form>
    )
}

export default Search