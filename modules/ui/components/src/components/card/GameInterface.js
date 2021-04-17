import React, { useRef, useEffect } from "react";
import styled, { css, transform } from 'styled-components'
import Circle from './Circle'
import Hand, {defaults as handDefaults} from './Hand'
import Card, {defaults as cardDefaults} from './Card'


const defaults = {
  playerIndex: 0,
  hands: [
    { cards: cardDefaults},
    { cards: cardDefaults}
  ]
}

export default class GameInterface extends React.Component{

    render() {

     const props = {... defaults, ...this.props}
     console.log(props)
     return (
      <div> 
      <Circle> 
      {
          props.hands.map( (e,i) =>
            <Hand cards={e.cards} isPlayerHand={i == props.playerIndex}/>
          )
      }    
      </Circle>
      </div>
        
     )}

}