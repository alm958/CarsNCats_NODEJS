var http = require('http');
var fs = require('fs');
var CarsCats = new RegExp('^../images/ca[r,t]s0[1,2,3,4,5].jpg$');

// function writeEnd(response){
//     response.write(contents);
//     response.end();
// }

function loadPage(page, response, code){
    fs.readFile(page, 'utf8', function (errors, contents){
        response.writeHead(code, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
}

function serveCSS(file, response, code){
    fs.readFile(file, 'utf8', function (errors, contents){
        response.writeHead(code, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
    });
}

function loadJpg(image, response, code){
    fs.readFile(image, function (errors, contents){
        response.writeHead(code, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
}

var server = http.createServer(function (request, response){
    console.log(request.url);
    if (request.url === '/'){
        loadPage('views/index.html', response, 200);
    }
    else if (request.url === '/cars') {
        loadPage('views/cars.html', response, 200);
    }
    else if (request.url === '/cats') {
        loadPage('views/cats.html', response, 200);
    }
    else if (request.url === '/cars/new') {
        loadPage('views/newcars.html', response, 200);
    }
    else if (request.url.endsWith('.jpg')) {
        console.log(request.url);
        loadJpg(`.${request.url}`, response, 200);
    }
    else if (request.url.endsWith('.css')) {
        serveCSS(`.${request.url}`, response, 200);
    }
    else {
        loadPage('views/error.html', response, 404);
    }

});

server.listen(6789);
