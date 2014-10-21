var express = require('express'),
    request = require('request');
var app = express();

var key = '361ccdede647636c';

app.use(express.static(__dirname+'/public'));

app.get('/weather', function(req, res){
    var lat = req.query.lat;
    var long = req.query.long;
    request.get('http://api.wunderground.com/api/'+key+'/geolookup/q/'+lat+','+long+'.json',
        function(err, response, body){
            if (err) {
                console.log(err);
            } else {
                parsedBody = JSON.parse(body);
                var state = parsedBody.location.state;
                var city = parsedBody.location.city;
                request.get('http://api.wunderground.com/api/' + key + '/conditions/q/' + state + '/' + city + '.json',
                    function (erra, responsa, boda) {
                        parsaBoda = JSON.parse(boda);
                        //Dear front end, here enclosed is the weather.
                        // Sincerely, Your Back End.
                        // PS. Thanks for nothing. I hate you.
                        res.status(200).json(parsaBoda.current_observation);
                    });
            }
        });
});

var port = 8484;

app.listen(port, function(){
    console.log("Listening on " + port);
});
