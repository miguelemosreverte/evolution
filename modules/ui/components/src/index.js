import React from 'react';
import ReactDOM from 'react-dom';
import Hand from './components/card/Hand'
import Welcome from './components/card/Welcome'

const render = (className, component) =>
document.querySelectorAll(className).forEach(function (element) {
  return ReactDOM.render( component(), element);
});


var totalCards = 1
var cardsPerPlayer = 1
var stage = 0

function refreshData()
{
    if (totalCards < 50 && stage == 0) {
      totalCards += 4
      cardsPerPlayer += 1
      if (!(totalCards < 50)) {stage = 1}
    } else if (stage == 1){
      totalCards -= 4
      cardsPerPlayer -= 1
      if (totalCards == 1) { stage = 2}
    }




const Cards = {
  totalCards,
  cardsPerPlayer
}

const increasingXFactorXParams = {
  ... Cards,
  xFactor: 80,
  xConst: 40
}

const decreasingTranslateXParams = {
  ... Cards,
  translateXFactor: -20
  }


const parabolicYParams = {
  ... Cards,
  translateYFactor: 16,
  translateYConst: -5,
  invertY: true}


  const data = {
    ... increasingXFactorXParams,
    ... decreasingTranslateXParams,
    ... parabolicYParams,
    cardsPerPlayer,
    totalCards,
    zFactor: totalCards * 2,
    zConst: cardsPerPlayer,
    yFactor: -100,
    yConst: -50,
    translateYConst: 5,
    invertY: false

  }

    render('#App', props =>{
      return <div>
        <Hand
        className = "presentation"

        {...{...{totalCards: 1, cardsPerPlayer: 1, translateXFactor: 1, translateXConst: 1, translateYFactor: 1, translateYConst: 1, invertY: true, translateZFactor: 1, translateZConst: 1, xFactor: 1, xConst: 1, yFactor: 1, yConst: 1, zFactor: 1, zConst: 1}, ... data}}
        onClick = {e => {
          /*render('#Welcome', props =>
          <Welcome />)*/
        }}

        ></Hand>
      </div>
    })



    if (stage != 2) {
      setTimeout(refreshData, 30);
    }
}


refreshData(); // execute function
