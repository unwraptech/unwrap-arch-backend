const express = require ('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());


app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

require('./src/middlewares/passport')
// routes 
const routes = require('./src/route');
app.use('/api/v1/', routes);


app.use(function(req, res, next){
    // app.all('*',function(req, res, next){
        // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Origin', configParams.originUrl);
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header("Access-Control-Allow-Credentials", "true");
        next();
    });
    
// ..testing 
app.get('/test', function(req, res){
    res.status(200).send({message : 'Testing Success'})
})
app.listen(process.env.PORT || 3000)