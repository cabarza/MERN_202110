const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

require('./config/mongo.config');

app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use( express.json() );
app.use( express.urlencoded( {extended: true }));

require('./routes/user.routes')(app);
require('./routes/contact.route')(app);

const server = app.listen(port, () => console.log("Server started"));

const io = require('socket.io')(server);

io.on("connection", socket => {
    console.log(socket.id);

    socket.broadcast.emit("welcome_event", { message: "Welcome to this socket" });


    socket.on("new_contact_event", data => {
        console.log(data);
        socket.broadcast.emit("contact_created_event", data);
    })
});