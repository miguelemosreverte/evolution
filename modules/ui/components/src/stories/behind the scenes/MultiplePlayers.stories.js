import React from 'react';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Circle from '../../components/card/Circle';
import Hand from '../../components/card/Hand';

import '../../components/card/Card.scss'

export default {
  title: 'Explanation/Many Players',
  component: Circle,
  decorators: [withKnobs],
};


const explanationBlock = (explanation) => 
  <div style={{display:"block", "textAlign": "left"}}>
    {explanation.split(/\r?\n/).map( line =>
      <div className='slabo text'> {line} </div>
    )}
  </div>  


const explanation = explanationBlock(`
  Here we will see how we can 
  add from 1 .. N players
  to the table
`)
const storyDecorator = (label, props) => 
<div className="center">
  <h1 className='slabo subtitle'>{label}</h1>
  <div style={{display:"flex"}}> {explanation} </div> {props}
</div>



const circleOfPlayersDemo = (i) => {
  return storyDecorator("Behind the Scenes", 
  <Circle>
  {
      Array(i).fill(0).map( (e,i) =>
        <Hand>{i}</Hand>
      )

  }
  </Circle>)
}



export const OnePlayer = () => circleOfPlayersDemo(1)
export const TwoPlayers = () => circleOfPlayersDemo(2)
export const ThreePlayers = () => circleOfPlayersDemo(3)
export const FourPlayers = () => circleOfPlayersDemo(4)
export const FivePlayers = () => circleOfPlayersDemo(5)
export const SixPlayers = () => circleOfPlayersDemo(6)


export const NPlayers = () =>  {
  const hands = number('hands', 8)

  return storyDecorator("Behind the Scenes", <Circle> 

  {
      Array(hands).fill(0).map( (e,i) =>
        <Hand>{i}</Hand>
      )

  }

  </Circle>)

}