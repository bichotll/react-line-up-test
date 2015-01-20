'use strict';

var React = require('react/addons');

//require('../../styles/Header.sass');

var Header = React.createClass({
  render: function () {
    return (
        <div class="header"> 
            <a class="btn btn-default pull-right" href="http://lineupnow.com/submit/" target="_blank">Add event</a>
            <h3 class="text-muted">LineUp is cool! Let's improve it!</h3>
        </div>
      );
  }
});

module.exports = Header;


