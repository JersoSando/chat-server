const express = require('express')
const app = express(); 
const { create, read, update, remove } = require('./controllers/messages_controller')

app.use(express.json())

app.get('/api/messages', read)
app.post('/api/messages', create)
app.put('/api/messages/:id', update)
app.delete('/api/messages/:id', remove)

app.listen(8080, () => {
    console.log('Server listening on port 8080')
})