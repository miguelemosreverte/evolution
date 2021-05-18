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

function refreshData(props)
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

  var connection = new WebSocket('wss://echo.websocket.org/');

  // When the connection is open, send some data to the server
  connection.onopen = function () {
    connection.send('Ping'); // Send the message 'Ping' to the server
  };

  // Log errors
  connection.onerror = function (error) {
    console.log('WebSocket Error ' + error);
  };

  // Log messages from the server
  connection.onmessage = function (e) {
    const props = {
      availableGames:[1,2,3,4,5]
    }
    
    //e.data
    refreshData(props)
    console.log('Server: ' + e.data);
  };

    render('#App', p =>{
      return <div>
        <Hand

        {... data}

        interactive={true}
        {...{cards: Array(data.cardsPerPlayer).fill({suit: "hearts", rank: "Two"})}} 

        {...props}
        onClick = {e => {
          render('#Welcome', p =>
          <Welcome 
          {...props}
          />)
        }}

        ></Hand>
      </div>
    })



    if (stage != 2) {
      setTimeout(refreshData, 30);
    }
}


refreshData(); // execute function
