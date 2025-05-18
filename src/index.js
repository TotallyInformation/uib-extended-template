/** Extended example of using uibuilder
 */

/** Toggle visible messages from Node-RED
 * NB: If using this with ES Modules (ESM) then you may need to attach
 *     the function to the window object. `window.toggleMsgs = function toggleMsgs() { ... }`
 */
function toggleMsgs() {
    uibuilder.showMsg()
}

// Listen for incoming messages from Node-RED and action
uibuilder.onChange('msg', (msg) => {
    console.log('Incoming message from Node-RED:', msg)
})

// Alternatively, listen for messages with a specific topic
uibuilder.onTopic('myTopic', (msg) => {
    console.log('Incoming message with topic "myTopic":', msg)
})

// Send a custom message from the browser to the Node-RED server when the page loads
uibuilder.send({
    // Content can be any JSON but it is often best to follow the standard
    // Node-RED message structure.
    topic: 'myTopic',
    payload: {
        myData: 'Hello from the browser!'
    }
})
