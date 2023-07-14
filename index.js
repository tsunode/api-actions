const express = require('express')

const app = express();

app.get('/', (req, res) => res.json('okk eita'))

app.listen(3333)