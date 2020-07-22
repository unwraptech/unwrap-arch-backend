const express = require ('express');
const app = express();

app.get('/test', function(req, res){
    res.status(200).send({message : 'Testing Success'})
})

app.listen(process.env.PORT || 3000)