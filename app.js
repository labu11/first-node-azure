const http = require('http');
const fs = require('fs');
const { parse } = require('path');

const server = http.createServer((req,res) => {

console.log(req.url,req.headers,req.method);

if(req.url==='/'){
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('</html>')
res.write('<head><title>MyFirstPage</title></head>');
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>')
res.write('<html>');
return res.end();
}

if(req.url==='/message'&&req.method==='POST'){
    const body=[];
    req.on('data',(chunk) =>{
            console.log(chunk);
            body.push(chunk);
    });
    req.on('end',() =>{
        const parseBody = Buffer.concat(body).toString();
        const message=parseBody.split('=')[1];
        fs.writeFileSync('req.txt',message);
        console.log(parseBody);
    });
  
    res.statusCode=302;
    res.setHeader('Location','/');
    return res.end();
}

res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('</html>')
res.write('<head><title>MyFirstPage</title></head>');
res.write('<body>Hello There this is the return page</body>')
res.write('<html>');
res.end();
});

server.listen(3000);