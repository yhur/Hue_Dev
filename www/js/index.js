var url = 'http://192.168.82.107/api/Ac5GAQgOPmDFAgWBogd27ESG8XJmIZMbKnZICcMW/lights/4/state';
function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return (true)
    } else {
        return (false)
    }
}

var lamp = false;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
            document.getElementById("statusDiv").innerHTML = this.responseText;
	}
};

var app = {
    initialize: function() {
        this.bindEvents();
        steps.hidden = true;
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        play_button.onclick = app.play;
        pause_button.onclick = app.pause;
        setup_button.onclick = app.setup;
    },
    play: function (e) {
        play_button.disabled = true;
        pause_button.disabled = false;
        xhttp.open("PUT", url, true);
        xhttp.send('{"on":true}');
    },
    pause: function (e) {
        pause_button.disabled = true;
        play_button.disabled = false;
        xhttp.open("PUT", url, true);
        xhttp.send('{"on":false}');
    },
    setup: function (e) {
        var ip = document.getElementById("hue_br_ip").value;
        var allValid = true;
        document.getElementById("statusDiv").innerHTML = '';
        if (ValidateIPaddress(ip)) {
            document.getElementById("hue_br_ip").style="background-color:white";
        } else {
            allValid = false;
            document.getElementById("hue_br_ip").style="background-color:red";
            document.getElementById("statusDiv").innerHTML = 'Wrong IP address';
        }
        if (allValid) {
            steps.hidden = false;
            document.getElementById("statusDiv").innerHTML = 'Ready to play lighting';
        }
    }
};

app.initialize();


