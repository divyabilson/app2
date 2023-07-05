const express = require ('express')
const app = express()

app.get ('/', (req, res) => res.send('Hello My New World'))
app.listen(3000, () => console.log('Server ready'))
