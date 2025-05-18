/** Extended example of using uibuilder
 */

function toggleMsgs() {
    uibuilder.showMsg()
}

// Listen for incoming messages from Node-RED and action
uibuilder.onChange('msg', (msg) => {
    // do stuff with the incoming msg
})

// Alternatively, listen for messages with a specific topic
uibuilder.onTopic('myTopic', (msg) => {
    // do stuff with the incoming msg
})

// Send a custom message from the browser to the Node-RED server
uibuilder.send({
    // Content can be any JSON but it is often best to follow the standard
    // Node-RED message structure.
    topic: 'myTopic',
    payload: {
        myData: 'Hello from the browser!'
    }
})
