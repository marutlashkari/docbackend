require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello chai")
})

app.get('/twitter', (req, res) => {
    res.send('marutlashkaricom')
})

app.get('/login', (req, res) => {
    res.send('<h4>code chai</h4>')
})

app.listen(process.env.PORT, () => {
    console.log('<h4>bapu chai<h4/>')
})

app.listen(port, () => {
    console.log(`Example app listining on port ${port}`)
})