const http = require('http');
const url = require('url');

const router = require('./routes/handlers');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const headers = req.headers;

    const route = router[trimmedPath];

    const selectedHandler = typeof route !== 'undefined' ? route : router.notFound;
    const data = {
        headers
    };

    selectedHandler(data, (statusCode) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 200;

        res.setHeader('content-type', 'application/json');
        res.writeHead(statusCode);

        res.end(JSON.stringify({
            message: 'hello world'
        }));
    });
});

const start = () => {
    const config = require('../config')();

    server.listen(config.port);

    console.log(`${config.envName} server started at ${config.port}.`);
}

const stop = () => {
    server.close();
}

module.exports = {
    start,
    stop
};
