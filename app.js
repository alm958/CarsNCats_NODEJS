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
    switch (request.url)
    {
        case '/':
            loadPage('views/index.html', response, 200);
            break;
        case '/cars':
            loadPage('views/cars.html', response, 200);
            break;
        case '/cats':
            loadPage('views/cats.html', response, 200);
            break;
        case '/cars/new':
            loadPage('views/newcars.html', response, 200);
            break;
        case '/stylesheets/style.css':
            serveCSS('./stylesheets/style.css', response, 200);
            break;
        case '/images/cars01.jpg':
            loadJpg('./images/cars01.jpg', response, 200);
            break;
        case '/images/cars02.jpg':
            loadJpg('./images/cars02.jpg', response, 200);
            break;
        case '/images/cars03.jpg':
            loadJpg('./images/cars03.jpg', response, 200);
            break;
        case '/images/cars04.jpg':
            loadJpg('./images/cars04.jpg', response, 200);
            break;
        case '/images/cars05.jpg':
            loadJpg('./images/cars05.jpg', response, 200);
            break;
        case '/images/cats01.jpg':
            loadJpg('./images/cats01.jpg', response, 200);
            break;
        case '/images/cats02.jpg':
            loadJpg('./images/cats02.jpg', response, 200);
            break;
        case '/images/cats03.jpg':
            loadJpg('./images/cats03.jpg', response, 200);
            break;
        case '/images/cats04.jpg':
            loadJpg('./images/cats04.jpg', response, 200);
            break;
        case '/images/cats05.jpg':
            loadJpg('./images/cats05.jpg', response, 200);
            break;
        default:
            loadPage('error.html', response, 404);
            break;
    };
});

server.listen(6789);
