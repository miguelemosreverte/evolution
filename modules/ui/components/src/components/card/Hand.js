

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
        translateXFactor: -2,
        translateYConst: 15,
        translateYFactor: -2,
        translateZConst: 1,
        translateZFactor: 1,
        invertY: true,
        xConst: 40,
        xFactor: 80,
        yConst: -10,
        yFactor: 14,
        zConst: 20,
        zFactor: 40
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
        console.log(this.props.isPlayerHand)
     return (
     <div className="Card"> 
     
     


<div className="wrap">
    {
        (this.props.cards || defaults.cards).map((card, i) => 
        <Card 
        rank={card.rank || "King"} 
        suit={card.suit || "hearts"} 
        key={"Card-" + i}
        index={i} 
        index={i} user={i % this.props.cardsPerPlayer || 4} total={this.props.cardsPerPlayer || 4}
        {... {...(this.props.isPlayerHand? renderDefaults.playerHand : renderDefaults.nonPlayerHand), ...{ totalCards: 4}, ...this.props}}
        isPlayerHand={this.props.isPlayerHand}/>
        )
    }



    
    

        

</div>
  
     
     </div>
        );
    }
}
