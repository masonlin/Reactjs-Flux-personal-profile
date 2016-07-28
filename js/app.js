var React = require('react');
var ReactDOM = require('react-dom');
var ProfileActionCreators = require('./actions/profile-action-creators');
var SocketActionCreators =  require('./actions/socket-action-creators');
var ProfilePGActionCreators =  require('./actions/profilePG-action-creators');
var Profile = require('./views/profiles');
var Socket = require('./views/sockets');
var ProfilePG = require('./views/profilePg');
//var CommentForm = require('./views/comment-form');




var App = React.createClass({
  componentDidMount(){
    //dirrect call an action
    //console.log("==1==");
    ProfileActionCreators.createProfile();
    // SocketActionCreators.createSocket();
    // ProfilePGActionCreators.createProfilePG();
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
    //console.log("==0==");
    return (
     <span>
        <Socket />
     </span>
    );
  }
});

ReactDOM.render(<ServerTime />, document.getElementById('servertime'));
