
const express = require('express')
const app = express()
const port = 3000
//useing cors to enable access
var cors = require('cors')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/name', (req, res) => {
  res.send('shreevatsa tg')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})