const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded( {extended: true}));

require('./config/mongo.config');

require('./routes/user.routes')(app);
require('./routes/car-type.routes')(app);
require('./routes/car.routes')(app);



app.listen(8000, () => console.log("El servidor está ejecutandose en el puerto 8000"));