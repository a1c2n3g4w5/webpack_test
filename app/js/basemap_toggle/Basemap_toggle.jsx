
var React = require('react');
import eventProxy from '../event/eventProxy'
var Basemap_toggle = React.createClass({
	componentDidMount: function() {
		this.props.map.on('zoom-end',function(e){
			console.info(e.level+"sss")
		});

	},
	vectorClick:function(){
		this.props.map.setBasemap('streets');
		eventProxy.trigger('msg','123');
	},
	imgClick:function(){
		this.props.map.setBasemap('satellite');
		eventProxy.trigger("Basemap_toggle","satellite");
	},
	render: function() {
		return (
			<div>
				<button onClick={this.vectorClick}>矢量</button>
				<button onClick={this.imgClick}>影像</button>
			</div>
		);
	}

});

module.exports = Basemap_toggle;