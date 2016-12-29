var React = require('react');
var ReactDOM = require('react-dom');
var BasemapToggle = require('./basemap_toggle/Basemap_toggle.jsx');
import eventProxy from './event/eventProxy'
// import the esri-loader library

// var esriLoader=require("esri-loader");
require("../css/main.css");
var $ = require('jquery');

function mapresize() {
	$("#mapDiv").width($(window).width()).height($(window).height());
}
$(document).ready(function() {
	mapresize();
	$(window).resize(mapresize);

	var Map = require("esri/map");
	var HomeButton = require("esri/dijit/HomeButton");
	var map = new Map("mapDiv", {
		center: [-118, 34.5],
		zoom: 8,
		basemap: "streets"
	});
	eventProxy.on('msg', (msg) => {
		console.info(msg);
	});
	eventProxy.on('Basemap_toggle', (msg) => {
		console.info(msg);
	});
	ReactDOM.render(<BasemapToggle map={map}/>, document.getElementById('basemap_toggle'));
})

// var Map_esri = require('./map_esri/Map_esri.jsx');
// var map_props = {
// 	id: "esri-map"
// };
// ReactDOM.render(<Map_esri {...map_props}/>, document.getElementById('mapDiv'));

// ReactDOM.render(<BasemapToggle />, document.getElementById('basemap_toggle'));

// var Map=require("esri/map");
// var map = new Map("mapDiv", {
// 		center: [-118, 34.5],
// 		zoom: 8,
// 		basemap: "topo"
// 	});
// require(["esri/map"], function(Map) {
// 	var map = new Map("mapDiv", {
// 		center: [-118, 34.5],
// 		zoom: 8,
// 		basemap: "topo"
// 	});
// });
// import Map from 'esri/map';
// require("ags/dojo/dojo.js");
// require("amd http://126.33.9.159/cloudsjzs2/config.js");
// require.ensure(["script-loader!./test.js"],function(){

// });
// require("script-loader!http://zjgis.wxy.gov.cn:8060/arcgis_js_api/3.17/init.js");
// require("file!./test.js")