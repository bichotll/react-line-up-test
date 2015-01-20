'use strict';

var config = require('./../services/config.js');

var React = require('react/addons');
var LineEvent = require('./LineEvent.js');

//require('../../styles/LineEventList.sass');

var LineEventList = React.createClass({
  render: function () {
    var createLineEvent = function(lineEvent) {
        return <LineEvent eventData={lineEvent} />;
    };
    return (
            <div>{this.props.lineEvents.map(createLineEvent)}</div>
            );
  }
});

module.exports = LineEventList;


