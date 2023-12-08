import React from "react";

import ChooseYourOwnAdventure from "../components/ChooseYourOwnAdventure";

import './Home.css';

function Home(){
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@600&display=swap" rel="stylesheet"/>
        <main className="body">
            <ChooseYourOwnAdventure/>
        </main>
        </>
    )
}

export default Home;