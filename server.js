const express = require('express')
const app = express()

app.use("/public", express.static(__dirname + '/public'));

app.get("*", (req, res) => {
  res.sendFile('./src/index.html', { root: __dirname })
})

const server = app.listen(3000, () => {
  console.log('Server started at port: ' + server.address().port)
})