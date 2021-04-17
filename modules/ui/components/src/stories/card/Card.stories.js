import React from 'react';

import CardComponent,{suits, ranks} from '../../components/card/Card';
import './styles/Card.stories.scss'

export default {
  title: 'Components/Card',
  component: CardComponent,
  argTypes: {
    suit: {control: {
      type: 'radio',
      options: Object.keys(suits)
    }},
    rank: {control: {
      type: 'radio',
      options: Object.keys(ranks)
    }},
  },
};

const storyDecorator = (props) => 
<div>
  <h1 className='slabo subtitle'>poker card</h1>
  <div className=" center ">
  {props}
</div>
</div>

export const Card = ({suit, rank}) => {
  return  storyDecorator( <CardComponent {...{rank: rank || "King", suit: suit || "diamond"}} /> )
}
