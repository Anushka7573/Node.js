const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader('content-type', 'text/html')
    console.log(req.url)


    if (req.url == '/') {
        res.statuscode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if (req.url == '/cwa') {
        res.statuscode = 200;
        res.end('<h1>Code with Anushka</h1> <p>Hey! Whats up about me</p>');
    }
    else if (req.url == '/about') {
        res.statuscode = 200;
        res.end('<h1>About My vs code page</h1> <p>Hey! Whats up about me</p>');
    }
    
    else {
        //res.anushka();
        res.statuscode = 404;
        res.end('<h1>Not Found</h1> <p>Hey! this page was not found on this server</p>');
    }

})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});