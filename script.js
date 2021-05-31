const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/artiklar', (req, res) => {
  res.send('lite artiklar')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})