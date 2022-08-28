import React, { useEffect, useState } from 'react'
import Names from '../Names/Names'
import Search from "../search/Search"
import Turn from "../Turn/Turn"


const Card = ({ pokeball, setPokeNumber }) => {

    //la funcion "randompoke" fija un id al azar de algun pokemon
    // the function "randompoke" sets a random id of some pokemon

    function randompoke() {
        setPokeNumber(Math.floor(Math.random() * 898))
    }

    const [secondColorCard, setSecondColorCard] = useState()

    let imgsrc = pokeball.sprites.other["official-artwork"].front_default ? pokeball.sprites.other["official-artwork"].front_default : pokeball.sprites.front_default;
    let pokeName = pokeball.name[0].toUpperCase() + pokeball.name.substring(1)

    useEffect(() => {

        (async function s() {

            if (pokeball.types[1] !== undefined) {
                let colr = await pokeball.types[1].type.name + "s"
                setSecondColorCard(colr)
            } else {
                setSecondColorCard("e")
            }

        })();
    }, [pokeball.types])


    return (
        <div className={`pokeapp  `}>
            <div
                id='front' className={`poke_card `}>
                <div
                    className={`poke_container ${pokeball.types[0].type.name} ${secondColorCard}`}>

                    <div className='pokenumber'>
                        {` N°${pokeball.id}`}
                    </div>
                    <div className={`colortwo `}>

                        <img className='pokeimg' src={imgsrc ? imgsrc : "https://cdn-icons-png.flaticon.com/512/85/85488.png"} alt="Loading" />

                        <div className='pokeinfo-container'>
                            <p className="pokename">
                                {pokeName}
                            </p>
                            <div className={`poketypes `}>
                                Type :
                                <div className={`typeone ${pokeball.types[0].type.name}`}> {` ${pokeball.types[0].type.name}  `}  </div>
                                {pokeball.types[1] ? <div className={`typetwo ${pokeball.types[1].type.name}`}> {pokeball.types[1] ? ` ${pokeball.types[1].type.name}` : ""} </div> : ""}
                            </div>
                            <div className='abilities_container'>
                                Abilities : {pokeball.abilities.length} {
                                    <div className="abilities">
                                        <p className="ability one">{`> ${pokeball.abilities[0].ability.name}`}</p>
                                        <p className="ability two">{pokeball.abilities[1] ? `>> ${pokeball.abilities[1].ability.name}` : ""}</p>
                                        <p className="ability three">{pokeball.abilities[2] ? `>>> ${pokeball.abilities[2].ability.name}` : ""}</p>
                                        <p className="ability four">{pokeball.abilities[3] ? `>>>> ${pokeball.abilities[3].ability.name}` : ""}</p>
                                    </div>}
                            </div>
                            <div className="pokedetails">
                                <div className='detail1'>Height : {(pokeball.height * 0.3048).toFixed(2)} Mts.</div>
                                <div className='detail2'>Weight : {(pokeball.weight * 0.453592).toFixed(2)} Kg.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='back' className="back"></div>
            </div>
            <button
                title='pokebutton'
                type='button'
                className='pokebutton'
                onClick={() => {
                    setTimeout(() => {
                        randompoke()
                    }, 500);
                    Turn()
                }}>
            </button>
            <h5 className='pokebutton_text'>Re-roll</h5>
            <Search
                setPokeNumber={setPokeNumber}
                turn={Turn}
            />
            <div className='nombres'>
                <Names
                    setPokeNumber={setPokeNumber}
                    turn={Turn}
                />
            </div>
        </div>
    )
}


export default Card;