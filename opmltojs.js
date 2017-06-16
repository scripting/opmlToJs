exports.parse = parse;

const xml2js = require ("xml2js");
const utils = require ("daveutils");

function isScalar (obj) {
	if (typeof (obj) == "object") {
		return (false);
		}
	return (true);
	}

function parse (opmltext, callback) {
	function convert (sourcestruct, deststruct) {
		var atts = sourcestruct ["$"];
		if (atts !== undefined) {
			for (var x in atts) {
				deststruct [x] = atts [x];
				}
			delete sourcestruct ["$"];
			}
		for (var x in sourcestruct) {
			var obj = sourcestruct [x];
			if (isScalar (obj)) {
				deststruct [x] = obj;
				}
			else {
				if (x == "outline") {
					if (deststruct.subs === undefined) {
						deststruct.subs = new Array ();
						}
					if (Array.isArray (obj)) {
						for (var i = 0; i < obj.length; i++) {
							var newobj = new Object ();
							convert (obj [i], newobj);
							deststruct.subs.push (newobj);
							}
						}
					else {
						var newobj = new Object ();
						convert (obj, newobj);
						deststruct.subs.push (newobj);
						}
					}
				else {
					deststruct [x] = new Object ();
					convert (obj, deststruct [x]);
					}
				}
			}
		}
	var options = {
		explicitArray: false
		};
	xml2js.parseString (opmltext, options, function (err, jstruct) {
		var theOutline = {
			opml: new Object ()
			}
		convert (jstruct.opml, theOutline.opml);
		callback (theOutline);
		});
	}
