var React = require('react');
var ReactDOM = require('react-dom');
import '../app/css/main.css'
var $=require('jquery');
// var ProductBox=require('./productBox.jsx');
// var ProductBox = React.createClass({
//   render: function () {
//     return (
//       <div className="productBox">
//         Hello World=!
//       </div>
//     );
//   }
// });
var Content = React.createClass({
  render: function() {
    return (
      <div>
        <b>Congratulations221</b>, you are now ready to implement your client side application! Enjoy :-)
      </div>
    );
  }
});

// ReactDOM.render(<ProductBox />, document.getElementById('content2'));
ReactDOM.render(<Content />, document.getElementById('content'));
$("body").append("<button id='testbtn'>ssss jquery</button><button id='testbtn2'>ssss jquery</button>");

$('#testbtn').click(function(){
  require.ensure(['./productBox.jsx','./productBox2.jsx'],function(){
    var ProductBox=require('./productBox.jsx');
    ReactDOM.render(<ProductBox />, document.getElementById('content2'));
    // var ProductBox=require('./productBox2.jsx');
    // ReactDOM.render(<ProductBox />, document.getElementById('content3'));
  })
})

$('#testbtn2').click(function(){
  require(['./productBox2.jsx'],function(){
    // var ProductBox=require('./productBox.jsx');
    // ReactDOM.render(<ProductBox />, document.getElementById('content2'));
    var ProductBox=require('./productBox2.jsx');
    ReactDOM.render(<ProductBox />, document.getElementById('content3'));
  })
})