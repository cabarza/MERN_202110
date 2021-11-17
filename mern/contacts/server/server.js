const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongo.config');

app.use(cors());

app.use( express.json() );
app.use( express.urlencoded( {extended: true }));

require('./routes/contact.route')(app);

app.listen(port, () => console.log("Server started"));