import {InMemoryEventStream} from './infrastructure/event_sourcing'
import {recoverStateStream} from './infrastructure/state'
import {render} from './infrastructure/reactRender'

const state = {}

const eventProcessor = () => {
    var events = []
    return (
        event => {
            events = [... events, event]
            if (events.length % 3 == 0) {
                // todo match on key, not on value
                const index = ((events.length / 3) - 1) * 3
                return { userRegistered: {
                    username: events[index + 1].setUsername,
                    password: events[index + 2].setPassword
                }}
            }
        }
    )
}

const {eventsDownstream, commandsUpstream} = InMemoryEventStream(eventProcessor())

commandsUpstream({ openWindow: "login" })
commandsUpstream({ setUsername: "user A" })
commandsUpstream({ setPassword: "123" })


commandsUpstream({ openWindow: "login" })
commandsUpstream({ setUsername: "user B" })
commandsUpstream({ setPassword: "456" })


commandsUpstream({ openWindow: "login" })
commandsUpstream({ setUsername: "user C" })
commandsUpstream({ setPassword: "789" })



const initialState = { users: []}
const evaluate = state => event => {
    return {
        ... state, ...{users: [...state.users, event.userRegistered]}
    }
}

const stateStream = recoverStateStream(evaluate)(initialState)({eventsDownstream})


stateStream( state => 
    render("#App", props => <div> {JSON.stringify(state)} </div>)
)


