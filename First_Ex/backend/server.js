const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const api = express.Router();
const port = 3000;

const jobs = [
    {
        title: 'nike',
        description: 'je sais pas',
        location: 'paris',
    },
    {
        title: 'adidas',
        description: 'je sais pas encore',
        location: 'madrid',npm
    },
    {
        title: 'apple',
        description: 'je sais pas encore wallah',
        location: 'state',
    },
];

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    //website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin",
        "http://localhost:4200"
    );

    //Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    //Request header you wish to allow
    res.setHeader("Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    //set to true if you need the website to include
    //cookies in the requestes sent
    //to the API (e.g. in case you use session)
    res.setHeader("Access-Control-Allow-Credentials", true);

    //Pass to next layer of middleware
    next();
});

api.get("/job", (req, res) => {
    console.log('methode GET avec le chemin /job');

    res.json(jobs);
});

api.post('/job', (req, res) => {
    // console.log('data', data);
    const data = res.body;
    
    jobs.push(data);
    res.json(jobs);
});

api.get("/search/:term/:place?", (req, res) => {
    const term = req.params.term;
    const place = req.params.place || null;

    const data = `${term} et ${place}`;

    res.json({ success: true, data });
});

app.use('/api', api);