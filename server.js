var http = require('http');
var settings = require('./settings')
console.log(settings);
var server =  http.createServer();
server.on('request', function(req, res) {
    switch (req.url){
        case '/about':
            msg = 'about this page';
            break;
        case '/profile':
            msg = 'about me'
            break;
        default:
            msg = 'wrong page'
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(msg);
    res.end();
});
server.listen(settings.port, settings.host);
console.log('server listening ...')
