require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Ayaaz!')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})