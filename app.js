const http = require('http');
const URL = require('url')
const UserAc = require('./adduser')
const server = http.createServer(function (req, res) {
    const data = [
        { username: 'naomi', age: 10 },
    { username: 'sefa', age: 14 },
    { username: 'eric', age: 11 }
]
    if (req.url == '/users') {
        res.writeHead(200, { 'Content_Type': 'text/html' });
        res.write("welcome");
        res.end();
    } 
    else if (req.url == '/adduser?username=ben&age=15') {
        const newUrl = URL.parse(req.url, true)
        const params = newUrl.query
        let username = params.username;
        let age = params.age;
        UserAc(username,age);
        res.end("record added");
    }
    else if (req.url.startsWith('/addNewUser')) {
        const newUrl = URL.parse(req.url, true)
        const params = newUrl.query
        let u_name = params.username;
        let u_age = params.age;
        UserAc(u_name, u_age);
        res.end("record added Successfully");
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content_Type': 'text/html' });
        res.write("contact page");
        res.end();
    } else {
        res.writeHead(404, { 'Content_Type': 'text/html' });
        res.end();
    }
})
server.listen(5000, function () {
    console.log("Server running");
})