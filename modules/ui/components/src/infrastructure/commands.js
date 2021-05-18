
/*
Given a previous state and a new event, give me a new state
*/
export const givenState = evaluate => state =>  
    evaluate(state)

/*
Given a previous state and a stream of new events, give me a stream of new states
*/
export const recoverStateStream = evaluate => state => ({eventUpstream}) => {
    const eventToState = event => {
        const command = evaluate(state)
        return ( reactToState => 
            reactToState(state)
        )
    }
    const stateDownstream = eventDownstream(eventToState)
    return stateDownstream
}