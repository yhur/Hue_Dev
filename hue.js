var url = 'http://192.168.82.107/api/Ac5GAQgOPmDFAgWBogd27ESG8XJmIZMbKnZICcMW/lights/4/state';
// 2nd
// 3rd
// 4th

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var lamp = false;

process.argv.length > 1 && process.argv[2] == 'on' && (lamp = true)

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		console.log(this.responseText);
	}
};

xhttp.open("PUT", url, true);
xhttp.send('{"on":' + lamp + '}');
