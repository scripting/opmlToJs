## opmlToJs package

### How to install

`npm install opmltojs`

### The story

opmlToJs makes it easy to read and write OPML files in Node apps. 

The basic idea: Pass in some OPML text, get back a JavaScript object. And the other way works too. 

It builds on <a href="https://github.com/Leonidas-from-XIV/node-xml2js">xml2Js</a>.

Note this package does not expand OPML includes. 

See the <a href="https://github.com/scripting/opmlToJs/tree/master/examples/readstates">readstates</a> app for an example of how to call it. 

A blog post <a href="http://scripting.com/2017/08/07.html#a093801">announcing</a> opmlToJs.

### Updates

##### v0.4.8 -- 8/12/16 by DW

Added new exported function <i>visitSubs.</i> I had to write this for an app I'm working on, but it seemed it should be part of this package. 

##### v0.4.5 -- 8/4/16 by DW

Added new exported function opmlify. It turns an outline structure returned by opmltojs.parse into the equivalent OPML text. It's the other side of parsing, serializing. 

Improved the example program, used the canonical example OPML file to test with. It is in its own folder with its own package.json file, so it's a better model of how an app might use the package. 

Add a <i>generator</i> element to the head section after we parse the OPML text, following the <a href="http://cyber.harvard.edu/rss/rss.html#optionalChannelElements">example</a> of RSS 2.0. 

Commented some debugging code. 

