/*

 ES6 by default! Using http://babeljs.io

 Our actual application code begins inside of
 server/main.js, but the process should be started
 from this file in order to enable ES6 translation.

 There is no boilerplate ES6 code in our application
 so if you choose not to use any ES6 features, you can
 start your application from main.js.

*/
// require('../newrelic'); // for heroku newrelic addon
// var http = require('http');  // to keep from sleeping
// setInterval(function() {
// 	console.log('-- hit app --')
//     http.get("http://warm-hollows-30252.herokuapp.com/");
// }, 60000);

var rp = require('request-promise');
setInterval(function() {
	var options = {
		uri: "http://warm-hollows-30252.herokuapp.com/",
		rejectUnauthorized: false
	};

	rp(options)
		.then(function(response) {
			console.log('RESPONSE: ', response);
		});
}, 30000);


require('babel-register');
require('./main');
