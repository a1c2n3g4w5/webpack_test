var React = require('react');
var ReactDOM = require('react-dom');
var BasemapToggle = require('../basemap_toggle/Basemap_toggle.jsx');

var Map_esri = React.createClass({
	//装载完成之后调用一次，在 render 之后调用，
	//从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点。
	componentDidMount: function() {
		var Map = require("esri/map");
		var HomeButton = require("esri/dijit/HomeButton");
		var map = new Map("mapDiv", {
			center: [-118, 34.5],
			zoom: 8,
			basemap: "topo"
		});
		// var home = new HomeButton({
		// 	map: map
		// }, "HomeButton");
		// home.startup();
		map.on('load',function(){
			
			ReactDOM.render(<BasemapToggle />, document.getElementById('basemap_toggle'));
		})

	},

	componentWillUpdate: function(nextProps, nextState) {

	},
	componentDidUpdate: function(prevProps, prevState) {

	},
	componentWillUnmount: function() {

	},
	handleClick: function() {

	},
	render: function() {


		 return null;
		// return (<div id="HomeButton" onClick={this.handleClick}></div>);
	}

});

module.exports = Map_esri;