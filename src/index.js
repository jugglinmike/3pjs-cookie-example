'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');

function makePath(domain, url) {
	if (url[url.length - 1] === '/') {
		url += 'index.html';
	}

	return path.resolve(__dirname + '/' + domain + url);
}

http.createServer(function(req, res) {
	var filePath = makePath('publisher', req.url);
	fs.readFile(filePath, { encoding: 'utf-8' }, function(err, contents) {
		if (err) {
			res.end('Error: ' + err);
			return;
		}

		res.end(contents);
	});
}).listen('8003');

http.createServer(function(req, res) {
	var filePath = makePath('app', req.url);
	fs.readFile(filePath, { encoding: 'utf-8' }, function(err, contents) {
		if (err) {
			res.end('Error: ' + err);
			return;
		}

		res.setHeader("Set-Cookie", "via-http=true");

		res.end(contents);
	});
}).listen('8004');
