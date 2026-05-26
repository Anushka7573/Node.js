const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req)
    res.statuscode=200;
    res.setHeader('content-type','text/html')
    res.end('<h1>My vs code page</h1> <p>Hey! Whats up</p>');
})

server.listen(port,() =>{
console.log(`server is listening on port ${port}`);
});