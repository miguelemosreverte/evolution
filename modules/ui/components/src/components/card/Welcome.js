

import React, { useState } from 'react';
import './Welcome.scss'



export default class Welcome extends React.Component {


    constructor(props) {
        super(props);
        this.state = {presentationMode: {rendering: true}, ...{ totalCards: 1, cardsPerPlayer: 1, stage: 0}}
    }


    render() {
        console.log("Rendering WELCOME")
     return (
        <div className="WelcomeDecoration centered">

            <div className="Welcome">

            <h1 > Name</h1>

            <h1 className='slabo'> Name</h1>
            <h2 className='slabo subtitle'>Welcome!</h2>


            </div>

        </div>


        );
    }
}
