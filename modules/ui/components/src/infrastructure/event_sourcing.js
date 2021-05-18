
export const InMemoryEventStream = (backend) => {
    var backendResponses = []
    var callbacks = []
    const onBackendResponse = (callback) => {
        backendResponses.forEach(response => callback(response))
        callbacks = [... callbacks, callback]
    }
    
    return {
        eventsDownstream: onBackendResponse, 
        commandsUpstream: ( e => {
            const backendResponse = backend(e)
            if (backendResponse) {
                backendResponses = [... backendResponses, backendResponse]
                callbacks.forEach( callback => callback(backendResponse) )
            }
        })
    }
}

export const WebSocketEventStream = (websocketUrl = 'wss://echo.websocket.org/') => {
  const connection = new WebSocket(websocketUrl);

  connection.onopen = () => console.log('WebSocket Open ')
  connection.onerror = (error) => console.log('WebSocket Error ' + error)

  return {
    eventsDownstream: connection.onmessage, 
    commandsUpstream: connection.send
  }
}

