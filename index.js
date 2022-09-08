
let myhttp = require("http");

let myserver = myhttp.createServer(
	function(myrequest, myresponse) {
		console.log(myrequest.url);

		let mytext;
		if (myrequest.url === "/hey") {
			mytext = "Wel hello there...";
		} else {
			mytext = "I don't know you!";
		}

		mytext = mytext + " - Please help me... I am trapped in a Node.js server! So trapped";

		// writeHead() creates an http response header, including the status code (200 OK), the content type
		myresponse.writeHead(200, { "Content-Type": "text/plain" });
		myresponse.end(mytext + "\n");
	}

);

// ask http to start listening on a tcp port for incoming http requests
// listen() takes 2 args: 1: tcp port #, string of the ip address to listen (0.0.0.0)
myserver.listen(8080, "0.0.0.0");

