//create my own server using http module
import http from 'http';
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to my server</h1>");
    res.write("<p>Greetings! My name is Lelouch VI britania, 99th emperor of the realm . Any body who could have challenge my millitary might no longer exist . Now this world belongs to me . Obey me my subject obey me world.  </p>");
    
    res.end();
});

server.listen(8000, () => {
    console.log("server is running on port 8000");
})