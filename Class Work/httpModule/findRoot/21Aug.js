//Practice routing using http module
import http from 'http';
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to my server</h1>");
    if(req.url==="/about"){
        res.write("<h1>This is the about page.</h1>");
    }
    else if(req.url==="/contact"){
        res.write("<h1>This is the contact page.</h1>");
    }
    else if(req.url==="/home"){
        res.write("<h1>This is the home page.</h1>");
    }
    else if(req.url==="/services"){
        res.write("<h1>This is the services page.</h1>");
    }
    else{
        res.write("<h1>404 page not found</h1>");
    }
    res.end();
});
server.listen(3000, () => {
    console.log("server is running on port 3000");
})