const data = require('./data/data.js');
const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('./routes.js');
const logger = require('morgan');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<html>
        <body>
            <h1>Get All Travels</h1> 
            <ul>
                <li>
                    <p><strong>URL</strong></p>
                    <p>/list</p>
                </li>
                <li>
                    <p><strong>Method</strong></p>
                    <p>GET</p>
                </li>
            </ul>
        </body>
    </html>
    `);
});

// list travel
router.get('/list', (req, res) => {
    res.json(data);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
// routes(app);
app.use('/.netlify/functions/server', router);


// const server = app.listen(9000, "127.0.0.1", () => {
//     const host = server.address().address;
//     const port = server.address().port;

//     console.log('App listening at http://%s:%s', host, port);
// })

module.exports.handler = serverless(app);