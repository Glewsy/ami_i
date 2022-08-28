import React, { useState, useEffect } from 'react'
import "./search.css"


const Search = ({ setPokeNumber, turn }) => {



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






    return (
        <form
            onSubmit={ev => {
                ev.preventDefault();
                if (Number(ev.target.search.value)) {
                    if (ev.target.search.value > 900 || ev.target.search.value <= 0) { return alert("Unacceptable number") }
                    else if (ev.target.search.value > 0) {
                        let eve = ev.target.search.value
                        turn()
                        setTimeout(() => {
                            setPokeNumber(eve)
                            ev.target.search.value = ""
                        }, 500);
                    }
                }
                else {

                    let eve = ev.target.search.value.toLowerCase()
                    if (!namesbrought.includes(eve)) {
                        return alert("Incorrect Name")

                    } else {

                        turn()
                        setTimeout(() => {
                            setPokeNumber(eve)
                            ev.target.search.value = ""
                        }, 500);
                    }
                }

            }}
            className='form_container' >
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
        </form>
    )
}

export default Search