import React from 'react';


import HandComponent, {defaults} from '../../components/card/Hand';
import '../../components/card/Card.scss'

export default {
  title: 'Components/Hand',
  component: HandComponent,
  argTypes: {
    cards: { 
      defaultValue: 4,
      label: "change me",
      control: 'number' }
  }
};




const storyDecorator = (props) => 
<div>
  <h1 className='slabo subtitle withDecoration'>poker hand</h1>
  <div className=" center ">
  {props}
</div>
</div>


export const OfPlayer = ({cards}) =>  { 
  const cardsToShow = Math.max(1, cards || 4)
  return storyDecorator(
    <div style={{top: "50vh", position: "absolute"}}>
      <HandComponent isPlayerHand={true} {...{cards: Array(cardsToShow).fill({suit: "hearts", rank: "Two"})}} />
    </div>
  )
}


export const OfOtherPlayers = ({cards}) =>  { 
  const cardsToShow = Math.max(1, cards || 4)
  return storyDecorator(<HandComponent {...{cards: Array(cardsToShow).fill({suit: "hearts", rank: "Two"})}}  />)
}
  
  