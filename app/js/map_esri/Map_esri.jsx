
var React = require('react');

var Map_esri = React.createClass({
	//装载完成之后调用一次，在 render 之后调用，
	//从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点。
	componentDidMount:function(){
		debugger
		// require.ensure(["ags/init.js"],function(){

		// });
	},
	render: function() {
		return (
			<div>{this.props.id}</div>
		);
	}

});

module.exports = Map_esri;