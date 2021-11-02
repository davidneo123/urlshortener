const express = require('express');

const app = express();

const connection = require('./db.config');

connection.once('open', () => console.log('db connected'))
connection.on('error', () => console.log('db Error'));

app.use('/', require('./routes/redirect'));
app.use('/api/url', require('./routes/url'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 'Server started in port ' + PORT);