const express = require('express');
const routes = require('./routes');
const validationJWT = require('./validationJWT');

const app = express();

app.use(express.json());

const port = 3000

const apiRoutes = express.Router();

app.use(apiRoutes);

apiRoutes.post('/twitter/register', routes.signin);
apiRoutes.post('/twitter/login', routes.login);
apiRoutes.post('/twitter/newtweet', validationJWT, routes.newTweet);
apiRoutes.get('/twitter/mytweets', validationJWT, routes.myTweets);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))