const express = require('express')
const app = express()
const port = 8080

app.use(express.urlencoded());
app.use(express.json());

//Routes to Services using GET
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About World!')
})

app.get('*', (req, res) => {
  res.send('Ops, You do something wrong!!')
})


//Routes to services using POST
app.post('/', (req, res) => {
  res.send('Nome:'. request.body.user.name);
  res.send('email:'. request.body.user.email)
})

//Start Listening...
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})