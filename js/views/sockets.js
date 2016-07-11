var React = require('react');
//var socketio = require('socket.io');
var socketio = require('socket.io-client');
var SocketStore = require('../stores/stores');

var Sockets = React.createClass({
  _socketData: '',

  getSocketData: function(){
    //io.connect(http://127.0.0.1);
    var socket = socketio.connect('http://127.0.0.1');

    socket.on('revMsg', function(data){
      _socketData = data;
      this.setState(data);
    }.bind(this));
  },

  onChange: function(){
    this.getSocketData();
  },

  getInitialState: function(){
    return {
      getSocketState: ''
    }
  },

  componentDidMount: function(){
    SocketStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function(){
    SocketStore.removeChangeListener(this.onChange);
  },

  render: function() {
    return (
      <div>
        {this._socketData}
      </div>
    );
  }

});

module.exports = Sockets;
