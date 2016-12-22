var React = require('react');
var ReactDOM = require('react-dom');

var ProductBox = React.createClass({
  render: function () {
    return (
      <div className="productBox">
        Hello World!
      </div>
    );
  }
});

module.exports = ProductBox;