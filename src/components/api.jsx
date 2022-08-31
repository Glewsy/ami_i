import React,{ useEffect} from 'react'

const Api = ({setBringNames}) => {
    let api = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=900";


    useEffect(() => {

        fetch(api)
            .then((res) => res.json())
            .then((a) => setBringNames(a.results))
            .catch((e) => console.log(e));
    }, )
  return (
    <></>
  )
}

export default Api