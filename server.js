var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a complete ninja now');
});

app.get('/netid', function(request, response){
    response.send('AWK25');
});

app.get('/nickname', function(request, response){
    response.send('perfect-rabbit');
});

app.listen(process.env.PORT || 4000);