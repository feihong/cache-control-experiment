const express = require('express')

const app = express()

app.use(express.static('public'))

let counter = 0

app.all('/counter', async (req, res) => {
  counter += 1
  // Cache this response for 10 seconds
  res.append('Cache-Control', 'max-age=10')
  res.send(`Counter is now ${counter}`)
})

// listen for requests :)
const listener = app.listen(process.env.PORT || 8000, () => {
  console.log(`Your app is listening on http://localhost:${listener.address().port}`)
})
