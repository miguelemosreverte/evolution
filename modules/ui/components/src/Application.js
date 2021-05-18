import React from 'react';
import ReactDOM from 'react-dom';
import Hand from './components/card/Hand'
import Welcome from './components/card/Welcome'


const render = (className, component) =>
document.querySelectorAll(className).forEach(function (element) {
  return ReactDOM.render( component(), element);
});


const defaults = {
    events: [

    ]
}



export const fromEventProducer = ({eventsDownstream}) => {
    var events = []
    eventsDownstream( event => {
        events = [...events, event]
        renderFromEvents({events})
    })
}

export const renderFromEvents = ({eventsDownstream, commandsUpstream}) => {
    render("EventSourcedApplication", <EventSourcedApplication {... events} />)
}

class EventSourcedApplication extends React.Component { 

}