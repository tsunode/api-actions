const express = require('express')

const app = express();

app.get('/', (req, res) => res.json('okk'))

app.listen(3333)