

import React, { useState } from 'react';
import './Card.scss'
import Card from './Card'

const renderDefaults = {
    nonPlayerHand: {
        translateXFactor: 1, 
        translateXConst:  1, 
        translateYFactor: 1, 
        translateYConst: 1, 
        invertY: true,
        translateZFactor: 1, 
        translateZConst: 1, 
        xFactor: 1, 
        xConst: 1, 
        yFactor: 1, 
        yConst: 1, 
        zFactor: 1, 
        zConst: 1
    },
    playerHand: {
        translateXConst: 1,
        translateXFactor: 4,
        translateYConst: -15,
        translateYFactor: -20,
        translateZConst: 1,
        translateZFactor: 1,
        invertY: false,
        xConst: 40,
        xFactor: 80,
        yConst: -10,
        yFactor: 24,
        zConst: -35,
        zFactor: -40
    }    
}


export const defaults = {  
    cards: [
        {
            suit: "hearts",
            rank: "Queen"
        },
        {
            suit: "hearts",
            rank: "Ace"
        },
        {
            suit: "hearts",
            rank: "King"
        },
        {
            suit: "hearts",
            rank: "Jack"
        }
    ],
    totalCards: 20, 
    cardsPerPlayer:  20, 
    ...renderDefaults.nonPlayerHand
}
  


export default class Hand extends React.Component {




    constructor(props) {
        super(props);
        this.state = {hover: false}
    }


    //rotation = (i) => {transform([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }]);}
    render() {
        console.log(this.props)
        console.log(this.props.cardsPerPlayer)
     return (
     <div className="Card"> 
     
     


     <div className={"wrap " +  " " +((this.props.isPlayerHand)? "isPlayerHand" : "")}>
    {
        (this.props.cards || defaults.cards).map((card, i) => 
        <Card 
        rank={card.rank || "King"} 
        suit={card.suit || "hearts"} 
        key={"Card-" + i}
        index={i} 
        index={i} user={i % this.props.cardsPerPlayer || 4} total={this.props.cardsPerPlayer || 4}
        {... {...(this.props.isPlayerHand? renderDefaults.playerHand : renderDefaults.nonPlayerHand), ...this.props}}
        isPlayerHand={this.props.isPlayerHand}/>
        )
    }



    
    

        

</div>
  
     
     </div>
        );
    }
}
