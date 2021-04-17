import React from 'react';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Hand, {defaults as handDefaults} from '../../components/card/Hand';
import Card, {defaults as cardDefaults} from '../../components/card/Card';
import '../../components/card/Card.scss'

export default {
  title: 'Explanation/Hand',
  component: Hand,
  decorators: [withKnobs],
};


const defaults =  {
  ... handDefaults, 
  ...{ cards: Array(20).fill(cardDefaults) }
}


const storyDecorator = (label, props) => 
<div className="center">
  <h1 className='slabo subtitle'>{label}</h1>
  {props}
</div>



export const _FirstWeStartWith20Cards = () => 
storyDecorator("Behind the Scenes", <Hand {...{...defaults}}/>)



function WeCanRotateXParameters({xFactor, xConst} = {}) {
  return {
    xFactor: number('xFactor',  xFactor || 80), 
    xConst: number('xConst',  xConst || 40)
  }
}

export const WeCanRotateX = () => 
storyDecorator("Behind the Scenes", <Hand {...{...defaults, ...WeCanRotateXParameters()
}}/>)



function WeCanTranslateXParameters({translateXFactor} = {}){
  return {
    translateXFactor: number('translateXFactor',  translateXFactor || -20)
  }
}

export const WeCanTranslateX = () => 
storyDecorator("Behind the Scenes", <Hand {...{...defaults, ...WeCanTranslateXParameters()
}}/>)



function WeCanTranslateYParameters({translateYFactor, translateYConst, invertY = true} = {}) {
  return {
    translateYFactor: number('translateXFactor',  translateYFactor || 16),
    translateYConst: number('translateYConst',  translateYConst || 5),
    invertY: boolean('invertY',  invertY)
  }
}

export const WeCanTranslateY = () => 
storyDecorator("Behind the Scenes", <Hand {...{...defaults, ...WeCanTranslateYParameters()
}}/>)



function LetsAddZRotationParameters(defaults, {zFactor, zConst} = {}) {
  return  {
    zFactor: number("zFactor", zFactor || defaults.cardsPerPlayer * 2),
    zConst: number("zConst", zConst || defaults.cardsPerPlayer)
  }
}
export const LetsAddZRotation = () => 
storyDecorator("Behind the Scenes", <Hand {...{...defaults, ...LetsAddZRotationParameters(defaults)
}}/>)


function LetsAddYRotationParameters({yFactor, yConst} = {}) {
  return {
    yFactor: number("yFactor", yFactor || -100),
    yConst: number("yConst", yConst || -50)}
}
export const LetsAddYRotation = () => 
storyDecorator("Behind the Scenes", <Hand {...{...defaults, ...LetsAddYRotationParameters()
}}/>)


const DefaultHandParametrization = (cards) => {
  const Ncards = number('cards', cards || 20)
  return storyDecorator("Behind the Scenes", <Hand {...{
    ...{... defaults, ...{totalCards: Ncards, cardsPerPlayer: Ncards}, ...{ cards: Array(Ncards).fill(cardDefaults) }}, 
    ...WeCanRotateXParameters(), 
    ...WeCanTranslateXParameters(),
    ...WeCanTranslateYParameters({translateYConst: 15, invertY: false}),
    ...LetsAddZRotationParameters(defaults),
    ...LetsAddYRotationParameters({yFactor: 14, yConst: -10})
  }}/>)
}
export const  _20CardHand = () => DefaultHandParametrization(20)
export const  _15CardHand = () => DefaultHandParametrization(15)
export const  _10CardHand = () => DefaultHandParametrization(10)
export const  _8CardHand = () => DefaultHandParametrization(8)
export const  _7CardHand = () => DefaultHandParametrization(7)
export const  _6CardHand = () => DefaultHandParametrization(6)
export const  _5CardHand = () => DefaultHandParametrization(5)
export const  _4CardHand = () => DefaultHandParametrization(4)
