import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send('Hola Mundo! - 2023')
})

app.listen(3000)
console.log('Server on port', 3000)
