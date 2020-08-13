import React from 'react'
import yesChad from "./yes-chad.png"

function Header(){
    return(
        <header>
            <img src={yesChad} alt="Head of stonks meme."/>
            <h2>Meme Generator</h2>
            
        </header>
    )
}

export default Header
