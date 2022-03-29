const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
	res.sendFile( path.join(`${__dirname}/../frontend/index.html`) )
})

app.use("/pub", express.static(`${__dirname}/../frontend/pub`))

app.listen(9000, () => {
	console.log("http://127.0.01:9000");
})

/* 

const http = require('http');
const fs = require('fs');
const path = require('path');


const serverCallbackFunction = (req, res) => {

	const errorHTML = `Something went wrong`;
    
	let filePath = path.resolve(`${__dirname}/../frontend${req.url}`);
    

	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	} else {
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				console.log("az index.html rendben ki lett");
				res.end(data);
			}
		});
	}
	});
}

const server = http.createServer(serverCallbackFunction);

const port = 9000
const ip = "127.0.0.1"
const listenFun = () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
		console.log(`Motivational quote`);
}

server.listen(port, ip, listenFun); 
*/