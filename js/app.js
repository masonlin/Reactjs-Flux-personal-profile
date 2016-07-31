var React = require('react');
var ReactDOM = require('react-dom');
var ProfileActionCreators = require('./actions/profile-action-creators');
var SocketActionCreators =  require('./actions/socket-action-creators');
var ProfilePGActionCreators =  require('./actions/profilePG-action-creators');
var Profile = require('./views/profiles');
var Socket = require('./views/sockets');
var ProfilePG = require('./views/profilePg');


var PPostgre = React.createClass({
  componentDidMount(){
    ProfilePGActionCreators.createProfilePG();
  },

  render: function() {
    return (
     <span>
        <ProfilePG data_spec="EMAIL"/>
     </span>
    );
  }
});

ReactDOM.render(<PPostgre />, document.getElementById('myemail'));

var MyPhone = React.createClass({
  render: function() {
    return (
     <span>
        <ProfilePG data_spec="PHONE_NUMBER"/>
     </span>
    );
  }
});

ReactDOM.render(<MyPhone />, document.getElementById('myphone'));


var MyAddr = React.createClass({
  render: function() {
    return (
     <span>
        <ProfilePG data_spec="ADDR"/>
     </span>
    );
  }
});

ReactDOM.render(<MyAddr />, document.getElementById('myaddr'));


var App = React.createClass({
  componentDidMount(){
    //dirrect call an action
    ProfileActionCreators.createProfile();
  },

  render: function() {
    //console.log("==0==");
    return (
     <span>
        <Profile />
     </span>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));


var ServerTime = React.createClass({
  componentDidMount(){
    SocketActionCreators.createSocket();
  },

  render: function() {
    return (
     <span>
        <Socket />
     </span>
    );
  }
});

ReactDOM.render(<ServerTime />, document.getElementById('servertime'));
