## opmlToJs package

### How to install

`npm install opmltojs`

### The story

opmlToJs is an attempt to once and for all solve the problem of making it really easy to read OPML files in JavaScript apps. 

It builds on <a href="https://github.com/Leonidas-from-XIV/node-xml2js">xml2Js</a>.

Note this package does not expand OPML includes. 

See the <a href="https://github.com/scripting/opmlToJs/blob/master/test.js">test.js</a> app for an example of how to call it. 

### Updates

##### v0.4.5 -- 8/4/6 by DW

Added new exported function opmlify. It turns an outline structure returned by opmltojs.parse into the equivalent OPML text. It's the other side of parsing, serializing. 

Improved the example program, used the canonical example OPML file to test with. It is in its own folder with its own package.json file, so it's a better model of how an app might use the package. 

Commented some debugging code. 

