

import React, { useState } from 'react';
import './Card.scss'
import './Welcome.scss'

const availableGame = {
    name: "Player 2",
    url: "asdasd"
}
const defaults = {
    availableGames: [availableGame]
}

export default class Welcome extends React.Component {


    constructor(props) {
        super(props);
        this.state = { name: 'a player' };

    }

    componentDidMount() {
        this.nameInput.focus();
        this.nameInput.addEventListener(
            "keydown",
            (event) => {
                if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
                    event.preventDefault();
                }
            },
            false
        )
    }

    render() {
        const props = {... defaults, ... this.props}
        return (
            <div className=" WelcomeDecoration blurred">
            <div className="">

  


   <div className="Welcome">

                    <h1 className='slabo blurred'> Name</h1>
                    <div className="slabo title" style={{ display: "flex" }}>


                        <input
                            style={{ "width": ((this.state.name.length + 3) / 1.7) + "em" }}
                            ref={(input) => { this.nameInput = input; }}
                            className="slabo title" type="text"
                            value={this.state.name}
                            maxlength={7}
                            onChange={e => {
                                    this.setState({ name: e.target.value })
                            }} /> <div
                                className="slabo title blinking"> _</div>
                    </div>



                   
                    <input
                            className="slabo title blurred" 
                            type="button"
                            value="join"
                            onClick={e => {
                                    this.setState({ showJoinList: true, showRoomStatus: false})
                            }} />


                    <input
                        className="slabo title blurred" 
                        type="button"
                        value="create"
                        onChange={e => {
                            this.setState({ showRoomStatus: true, showJoinList: false})
                        }} />                   

                </div>


                {this.state.showJoinList && props.availableGames.map(({name, url}, i) => 
                  <div key={`availableGames-${i}`}> {availableGame} </div>
                )}



            </div>
            </div>


        );
    }
}
