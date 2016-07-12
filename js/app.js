var React = require('react');
var ReactDOM = require('react-dom');
var Profile = require('./views/profiles');
var Socket = require('./views/sockets');
//var CommentForm = require('./views/comment-form');
var ProfileActionCreators = require('./actions/profile-action-creators');
var SocketActionCreators =  require('./actions/socket-action-creators');



var App = React.createClass({
  componentDidMount(){
    //dirrect call an action
    //console.log("==1==");
    ProfileActionCreators.createProfile();
    SocketActionCreators.createSocket();
  },

  render: function() {
    //console.log("==0==");
    return (
     <div>
        <Profile /><br/>
        <Socket />
     </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
