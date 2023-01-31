const express = require('express');
const router = require('./router/routerLogin');
const routerCategory = require('./router/routerCategory');

// ...

const app = express();

app.use(express.json());
app.use(router);
app.use('/categories', routerCategory);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
