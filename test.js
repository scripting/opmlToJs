const opmlToJs = require ("./opmltojs.js");
const request = require ("request");
request ("http://this.how/electricRiver?format=opml", function (error, response, data) {
	opmlToJs.parse (data, function (theOutline) {
		console.log (JSON.stringify (theOutline, undefined, 4));
		});
	});
