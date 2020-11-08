const express = require('express');

require('dotenv').config();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

const ctrl = require('./controller');

const massive = require('massive');

massive(
    {connectionString: CONNECTION_STRING, 
        ssl: {rejectUnauthorized: false}}
).then(dbInstance => {
    app.set('db', dbInstance);
    console.log("Connecting to database");
}).catch(err => console.log(err));



app.use(express.json());

app.post('/api/product', ctrl.create);

app.get('/api/inventory', ctrl.getProducts);

app.delete('/api/inventory/:id', ctrl.deleteProduct);

app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`));