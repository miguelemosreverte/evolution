

import React, { useState } from 'react';
import './Card.scss'
import Hand, {defaultProps} from './Hand'



export default class App extends React.Component {


    
    presentation = (e) => {


        function refreshData()
        {

        var totalCards = e.state.totalCards
        var cardsPerPlayer = e.state.cardsPerPlayer
        var stage = e.state.stage
        
            console.log("refreshData") 
            if (totalCards < 50 && stage == 0) { 
            totalCards += 4
            cardsPerPlayer += 1
            e.setState({totalCards: totalCards + 4, cardsPerPlayer: cardsPerPlayer + 1})

            if (!(totalCards < 50)) {stage = 1}
            } else if (stage == 1){ 
            e.setState({totalCards: totalCards - 4, cardsPerPlayer: cardsPerPlayer - 1})

            if (totalCards == 1) { 
                e.setState({stage: 4})

            }
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

        console.log("Setting data and rendering?" + cardsPerPlayer + " " + totalCards)
        e.setState({presentationMode: {rendering: true, presentationProps: {...defaultProps, data}}})

         


            if (stage == 2) {
                e.setState({presentationMode: { rendering: false}})
            } else {
                //setTimeout(refreshData, 30);
            }
        }


        refreshData(); // execute function

    }


    constructor(props) {
        super(props);
        this.state = {presentationMode: {rendering: true}, ...{ totalCards: 1, cardsPerPlayer: 1, stage: 0}}
    }


    render() {
    console.log(this.state)
     if (this.state.presentationMode.rendering) this.presentation(this)
     return (
        <div >             

            { this.state.presentationMode.rendering &&  <div >             
                <h1 className='slabo'>poker hand</h1>
                <h2 className='slabo subtitle withDecoration'>Made with css pseudo selectors</h2>
            

                <Hand {... this.state.presentationMode.data} />
            </div>
            }


            { !this.state.presentationMode.rendering &&  <div >             
                <h1 className='slabo'>poker hand</h1>
                <h2 className='slabo subtitle withDecoration'>Made with css pseudo selectors</h2>
            
                <h1> Well, hello there! </h1>
            </div>
            }


        </div>
    
     
        );
    }
}
