const opmlToJs = require ("./opmltojs.js");
const request = require ("request");
var urlOpml = "http://this.how/electricRiver?format=opml";

request (urlOpml, function (error, response, data) {
	opmlToJs.parse (data, function (theOutline) {
		console.log (JSON.stringify (theOutline, undefined, 4));
		});
	});

