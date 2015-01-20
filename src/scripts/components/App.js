'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Header = require('./Header.js');
var Menu = require('./Menu.js');
var LineEventList = require('./LineEventList.js');
var eventService = require('./../services/event-service.js');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

//require('bootstrap-sass-webpack');
//require('../../styles/App.sass');

var App = React.createClass({
    mixins: [Router.State],
    getInitialState: function(){
        return {lineEvents: []};
    },
    componentDidMount: function() {
        var urlParams = this.getParams();
        var params = {};
        
        var today = new Date();
        if (urlParams.when === 'this-week') {
            var lastDay = new Date();
            lastDay.setDate(today.getDate() + 7);
            params['start_date'] = today;
            params['end_date'] = lastDay;
        } else {
            params['start_date'] = today;
            params['end_date'] = today;
        }
        
        if (urlParams.category !== 'all'){
            params['query'] = urlParams.category;
        }
        
        var self = this;
        eventService.getEvents(params).done(function (data) {
            self.setState({
                lineEvents: data.data
            });
        });
    },
    render: function () {
        return (
            <div class="container">
                <div>{this.getParams()}</div>
                <Header/>
                <Menu/>
                <LineEventList lineEvents={this.state.lineEvents} />
            </div>
          );
        }
});

module.exports = App;


