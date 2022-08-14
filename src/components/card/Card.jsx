import React, { useEffect, useState } from 'react'
import Search from "../search/Search"


const Card = ({ pokeball, setPokeNumber }) => {


    function randompoke() {
        setPokeNumber(Math.floor(Math.random() * 898))
    }

    function turn() {
        let back = document.getElementById("back")
        let front = document.getElementById("front")
        back.classList.add("backed")
        front.classList.add(`fronted`)
        front.classList.replace(pokeball.types[0].type.name, pokeball.types[0].type.name)
        front.classList.replace(secondColorCard, secondColorCard)
        setTimeout(() => {
            back.classList.remove("backed")
            front.classList.remove("fronted")
        }, 2000);
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
                        <img className='pokeimg' src={imgsrc} alt="loading" />

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
                                        <p className="ability">{`> ${pokeball.abilities[0].ability.name}`}</p>
                                        <p className="ability">{pokeball.abilities[1] ? `>> ${pokeball.abilities[1].ability.name}` : ""}</p>
                                        <p className="ability">{pokeball.abilities[2] ? `>>> ${pokeball.abilities[2].ability.name}` : ""}</p>
                                        <p className="ability">{pokeball.abilities[3] ? `>>>> ${pokeball.abilities[3].ability.name}` : ""}</p>
                                    </div>}
                            </div>
                            <div className="pokedetails">
                                <div className='detail1'>Height : {pokeball.height} Mts.</div>
                                <div className='detail2'>Weight : {pokeball.weight} Kg.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='back' className="back"></div>
            </div>
            <button type='button'
                className='pokebutton'
                onClick={() => {
                    setTimeout(() => {
                        randompoke()
                    }, 1000);
                    turn()
                }}>
            </button>
            <h5 className='pokebutton_text'>Re-roll</h5>
            <Search
                setPokeNumber={setPokeNumber}
                turn={turn}
            />

        </div>
    )
}


export default Card;