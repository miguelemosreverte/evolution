

import React, { useState } from 'react';
import styled, { css, transform } from 'styled-components'





export const suits = {
    hearts: 'H', 
    clover: 'C', 
    diamond: 'D', 
    spades: 'S'
}

export const ranks = {
    Two: '2', 
    Three: '2',
    Four: '4',
    Five: '5',
    Six: '6',
    Seven: '6',
    Eight: '7',
    Nine: '9',
    Ten: '10',
    Jack: 'J',
    Queen: 'Q',
    King: 'K',
    Ace: 'A'
}

export const defaults = {
  suit: "hearts",
  rank: "Two"
}



const DIV = styled.div`
  /* This renders the buttons above... Edit me! 
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  
  box-shadow: -40px 80px 80px -10px rgba(0, 0, 0, 0.7);

    background: white;
    color: black;
    
    */


  ${({user,index, total, translateXFactor, translateXConst, translateYFactor, translateYConst, invertY, translateZFactor, translateZConst, xFactor, xConst, yFactor, yConst, zFactor, zConst}) => {
    const r = (index / total)
    return css`

    transform:  translateX(${r * translateXFactor - translateXConst}vw) translateY(${(r * r * translateYFactor  -  r * translateYFactor  + translateYConst) * (invertY? -1 : 1)}vh)  rotateY(${r * xFactor - xConst}deg) rotateX(${r * yFactor - yConst}deg) rotateZ(${r * zFactor - zConst}deg) ;
    z-index: ${Math.round(r * translateZFactor - translateZConst)} !important;
  `
  }}
`




export default class Card extends React.Component {



    constructor(props) {
        super(props);
        this.state = {clicked: 0}
    }


    render() {
     const suit = suits[this.props.suit || 2] 
     const rank = ranks[this.props.rank || 11]
     const image = '../Standard52CardDeck/' + rank + suit + '.jpg'
     console.log(this.props)

     return (
        <div className={" " +((this.state.clicked % 2 == 0)? "onHand" : "onTable") }>
                <DIV {...this.props} >
                  {(this.props.isPlayerHand || this.props.interactive)? 
                  <img className={"fit"} src={image} onClick={e => this.setState({clicked: this.state.clicked + 1})}/> :
                  <img className={"fit"} src={image}/>
                }
                
                
                </DIV>
          

        </div>
        
        );
    }
}
