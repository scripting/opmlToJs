const opmlToJs = require ("opmltojs");
const request = require ("request");
const fs = require ("fs");
var urlOpmlFile = "http://hosting.opml.org/dave/spec/states.opml";
request (urlOpmlFile, function (err, response, data) {
	opmlToJs.parse (data, function (theOutline) {
		if (err) {
			console.log (err.message);
			}
		else {
			console.log (JSON.stringify (theOutline, undefined, 4));
			fs.writeFile ("states.json", JSON.stringify (theOutline, undefined, 4))
			}
		});
	});
