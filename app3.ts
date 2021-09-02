import express from 'express'
const app = express()

app.set('title', 'qinglin')

app.get('title')

app.listen('9500', () => {
    console.log('正在访问9500端口号中：')
})