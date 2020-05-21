const express = require('express');
const routes = require('./routes/routes');
require('dotenv/config')

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.SERVER_PORT;

app.listen(port,()=>{
    console.log(`Server is running at localhost:${port}`);
});