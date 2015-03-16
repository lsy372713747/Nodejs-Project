var express = require('express');
var app = express();
app.get('/expresss',function(req,res){
        var body = 'Hello full stack!';
        res.send(body);
});
app.listen(3000);
console.log('Start server on port 3000');