import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})

app.listen(process.env.PORT, () => {
  console.log('started at', process.env.PORT)
})