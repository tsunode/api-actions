const express = require('express')

const app = express();

app.get('/', (req, res) => res.json('okkk'))

app.listen(21123)