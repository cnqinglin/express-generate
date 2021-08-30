import express from 'express'
const app = express()
const port = 8080

app.get('/user', (req, res) => {
  res.send("你好a，express.ts")
})

app.listen(port,() => {
    console.log(`在访问当中${port}`)
})