

import React, { useState } from 'react';
import './Card.scss'
import Hand from './Hand'



export default class Board extends React.Component {




    constructor(props) {
        super(props);
        this.state = {hover: false}
    }


    render() {
     return (
    <div >             
        <h1 className='slabo'>poker hand</h1>
        <h2 className='slabo subtitle'>Made with css pseudo selectors</h2>
        


        <Hand  />
     </div>
  
     
        );
    }
}
