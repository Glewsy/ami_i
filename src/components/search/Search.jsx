import React, { useState } from 'react'
import "./search.css"
import Api from '../api'

const Search = ({ setPokeNumber, turn }) => {

    let [BringNames, setBringNames] = useState()
    let namesbrought = []
    if (BringNames !== undefined) {
        BringNames.map((e) => namesbrought.push(e.name))
    }


    function Change(selection) {
        setTimeout(() => {
            setPokeNumber(selection)
        }, 400);
    }





    return (
        <form
            className='form_container'
            onSubmit={ev => {
                ev.preventDefault();
                if (Number(ev.target.search.value)) {
                    if (ev.target.search.value > 900 || ev.target.search.value <= 0) { return alert("Unacceptable number") }
                    else if (ev.target.search.value > 0) {
                        let eve = ev.target.search.value
                        turn()
                        Change(eve)
                        ev.target.search.value = ""
                    }
                }
                else {

                    let eve = ev.target.search.value.toLowerCase()
                    if (!namesbrought.includes(eve)) {
                        return alert("Incorrect Name")

                    } else {
                        turn()
                        Change(eve)
                        ev.target.search.value = ""
                    }
                }

            }}>
            <input
                className='form_input'
                name='search'
                autoComplete='off'
                id='input'
                placeholder='Enter a pokemon name // number(max 900)'
                type="text" />
            <button
                title='search-button'
                className='form_button'
                type='submit'
            ></button>
            <Api
                setBringNames={setBringNames}
            />
        </form>
    )
}

export default Search