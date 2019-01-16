const fs       = require('fs');
const express  = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./view/public'));
require('ejs').delimiter = '?';
app.set('view engine', 'ejs');
app.set('views', './view/to_render/');

app.use(require('./controller/'));

const server = app.listen(process.env.PORT || '9000')
.on('listening', () =>
{
    console.info
    (
        'HTTP server started,',
        server.address().family === 'IPv6' ?
            'http://[' + server.address().address + ']:' + server.address().port :
            'http://' + server.address().address + ':' + server.address.port
    );
});