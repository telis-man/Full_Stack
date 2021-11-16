const express = require('express')
const app = express()
const os = require('os')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cpu', (req, res) =>{
  res.send(JSON.stringify(os.cpus()));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})