'use strict';

var React = require('react/addons');
//require('../../styles/LineEvent.sass');

var LineEvent = React.createClass({
  render: function () {
    return (
        <div class="col-xs-6 col-md-4">
            <div class="thumbnail">
                <img src={this.props.eventData.images[0].low_resolution.url} alt="event image" />
                <div class="caption">
                    <h3>{this.props.eventData.title}</h3>
                    <div class="row" >
                        <div class="col-xs-6" >
                            {this.props.eventData.venues[0].name}
                        </div>
                        <div class="col-xs-6" >
                            {this.props.eventData.venues[0].performances[0].start_date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  }
});

module.exports = LineEvent;


