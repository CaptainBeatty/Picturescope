const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Ksenia');
});

server.listen(process.env.PORT || 3000);