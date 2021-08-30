const express = require('express')
const app = express()
const port = 8080

app.get('/user', (req, res) => {
//   res.send("req",req)
    console.log('res', res)
    console.log('req',req)
})

app.listen(port,() => {
    console.log(`在访问当中${port}`)
})