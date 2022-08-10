import React, { useEffect, useState } from 'react'


const Card = ({ pokeNumber, pokeball, setPokeNumber }) => {

  
    function randompoke() {
        setPokeNumber(Math.floor(Math.random() * 890))
    }

    const [secondColorCard, setSecondColorCard] = useState()

    let imgsrc = pokeball.sprites.other["official-artwork"].front_default ? pokeball.sprites.other["official-artwork"].front_default : pokeball.sprites.front_default;
    let pokeName = pokeball.name[0].toUpperCase() + pokeball.name.substring(1)

    useEffect(() => {

        (async function s() {
        
            if (pokeball.types[1] !== undefined ) {
                let colr = await pokeball.types[1].type.name + "s"
                setSecondColorCard(colr)
            } else {
                setSecondColorCard("")
            }

        })();
    }, [pokeball.types])


    return (
        <div className={`pokeapp  `}>
            <div className={
                `poke_container
                     ${pokeball.types[0].type.name}
                    ${secondColorCard} }
                     `
            }>
                
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
            <button
                className='pokebutton'
                onClick={() => {
                    randompoke()
                }}>
            </button>
            <h3 className='pokebutton_text'>Touch here for a new Pokemon</h3>

        </div>
    )
}


export default Card;