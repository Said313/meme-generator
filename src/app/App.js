import React from 'react'
import MemeGenerator from './appContents/MemeGenerator.js'
import Header from './appContents/Header.js'

import './app.scss'

function App(){
    return(
        <div id="app">
            <Header />
            <MemeGenerator />
        </div>

    )
}

export default App
