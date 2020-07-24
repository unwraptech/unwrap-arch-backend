const express  = require('express');
const app = express();
    const mobiles = require('./routes/mobile');
    const files = require('./routes/files');
    const upload = require('./routes/upload');
    const user = require('./routes/user');
    
    app.use('/upload', upload);
    app.use('/mobiles', mobiles);
    app.use('/files', files);
    app.use('/user', user)

module.exports = app;

