let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push( {id, text, time} )
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        console.log('my id is', req.params.id)
        const {text} = req.body
        const updateID = req.params.id
        const messageIndex = messages.findIndex((e) => updateID === e.id)
        // messages[messageIndex].text = text
        messages[messageIndex] = {
            ...messages[messageIndex],
            text: text
        }
        res.status(200).send(messages)
    },
    remove: (req, res) => {
        const deleteID = req.params.id
        const deleteIndex = messages.findIndex((e) => deleteID === e.id)
        messages.splice(deleteIndex, 1)
        res.status(200).send(messages)
    }
}