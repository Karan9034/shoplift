const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000


app.use(express.json())
app.use('/api', require('./routes/api'))


app.listen(PORT, () => console.log(`Server running on ${PORT}`))