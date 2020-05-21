require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');
const mongoose = require('mongoose');

const session = require('koa-session');

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI,
    COOKIE_SIGN_KEY: signKey
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true }).then(
    console.log('connected to mongodb')
).catch((e) => {
    console.error(e);
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening to port', port);
});

app.use(bodyParser());

// 세션/키 적용
const sessionConfig = {
    maxAge: 8640000, // 하루
    // signed: true(기본값)
};

app.user(session(sessionConfig, app));
app.keys = [signKey];