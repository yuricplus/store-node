const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(routes)

/*Query, params, body */

app.listen(3333);