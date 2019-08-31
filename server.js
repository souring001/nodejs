let http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring');
let settings = require('./settings');
console.log(settings);
let server =  http.createServer();
let template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
let posts = [];

function renderForm(posts, res){
    let data = ejs.render(template, {
        posts: posts
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}

server.on('request', function(req, res) {
    if (req.method == 'POST') {
        req.data = "";
        req.on("readable", function() {
            req.data += req.read() || '';
            // console.log(req.data);
        });
        req.on("end", function() {
            let query = qs.parse(req.data);
            // console.log(query);
            posts.push(query.name);
            renderForm(posts, res);
        });
    } else {
        renderForm(posts, res);
    }
});
server.listen(settings.port, settings.host);
console.log('server listening ...')
