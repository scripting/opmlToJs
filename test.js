const opmlToJs = require ("./opmltojs.js");
const request = require ("request");
const fs = require ("fs");
request ("http://this.how/electricRiver?format=opml", function (error, response, data) {
	opmlToJs.parse (data, function (theOutline) {
		fs.writeFile ("test.json", JSON.stringify (theOutline, undefined, 4))
		});
	});
