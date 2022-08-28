import React, {Fragment} from 'react'
const Turn = () => {

// la funcion turn hace voltear la carta
// the "turn" function makes the card flips

    function turn() {
        let back = document.getElementById("back")
        let front = document.getElementById("front")
        back.classList.add("backed")
        front.classList.add(`fronted`)
        setTimeout(() => {
            back.classList.remove("backed")
            front.classList.remove("fronted")
        }, 2000);
    }

  return (
    <Fragment>
        {turn()}
    </Fragment>
  )
}

export default Turn