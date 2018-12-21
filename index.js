const request = require('request');
const argv = require('yargs').argv;

let  apiKey = 'd552d00e3873c4a1782ebf0393118839';
let city = argv.c || 'crystal lake';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err,response,body) {
if (err) {
console.log('error:', error);
} else {
let weather = JSON.parse(body);
let message = `Its ${weather.main.temp} degrees in ${weather.name}`;
console.log(message);
//console.log('error:', error);
}
});
