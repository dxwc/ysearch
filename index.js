const fs       = require('fs');
const express  = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./view/public'));

app.engine('html', (filePath, options, callback) =>
{
    try        { callback(null, fs.readFileSync(filePath, { encoding : 'UTF-8' })); }
    catch(err) { callback(err); }
});

app.set('views', './view/to_render/');
app.set('view engine', 'html');

app.use(require('./controller/'));

const server = app.listen(process.env.PORT || '9001')
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