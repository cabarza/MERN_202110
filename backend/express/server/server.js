const express = require('express');
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded( {extended: true }));

app.get('/api', (req, res) => {
    res.json({ message: 'Hola Express!!', ok: true });
});

require('./routes/contacts.routes')(app);

app.listen(port, () => console.log(`Servidor escuchando el puerto ${port}`));