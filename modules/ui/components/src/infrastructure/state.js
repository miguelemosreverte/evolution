
/*
Given a previous state and a new event, give me a new state
*/
export const recoverState = evaluate => previousState => event => 
    evaluate(previousState)(event)

/*
Given a previous state and a stream of new events, give me a stream of new states
*/
export const recoverStateStream = evaluate => initialState => ({eventsDownstream}) => {
    var state = initialState
    return reactToState => eventsDownstream( event => {
        state = evaluate(state)(event)
        reactToState(state)
    })
}

export const renderCommand = effect => state => event => 
    effect(state)(event)