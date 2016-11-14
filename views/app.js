var http = require('http');
var fs = require('fs');


function writeEnd(response){
    response.write(contents);
    response.end();
}

function loadPage(page, response, code){
    fs.readFile(page, 'utf8', function (errors, contents){
        response.writeHead(code, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
}

function serveCSS(page, response, code){
    fs.readFile(page, 'utf8', function (errors, contents){
        response.writeHead(code, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
    });
}

function loadJpg(page, response, code){
    fs.readFile(page, 'utf8', function (errors, contents){
        response.writeHead(code, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
}

var server = http.createServer(function (request, response){
    switch (request.url)
    {
        case '/':
            loadPage('index.html', response, 200);
            break;
        case '/cars':
            loadPage('cars.html', response, 200);
            break;
        case '/cats':
            loadPage('cats.html', response, 200);
            break;
        case '/cars/new':
            loadPage('cats.html', response, 200);
            break;
        case '/stylesheets/style.css':
            serveCSS('./stylesheets/style.css', response, 200);
            break;
        case '/images/^cars0[1,2,3,4,5]$':
            loadJpg('./stylesheets/style.css', response, 200);
            break;
        default:
            loadPage('error.html', response, 404);
            break;
    };
});

server.listen(7077);
