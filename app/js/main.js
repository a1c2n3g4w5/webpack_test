var React = require('react');
var ReactDOM = require('react-dom');

require("../css/main.css");
var $=require('jquery');

var Map_esri=require('./map_esri/Map_esri.jsx');
var map_props={
	id:"esri-map"
};
ReactDOM.render(<Map_esri {...map_props}/>,document.getElementById('mapDiv'));

// require("ags/dojo/dojo.js");
 // require("amd http://126.33.9.159/cloudsjzs2/config.js");
require("script-loader!./test.js");
 // require("file!./test.js")