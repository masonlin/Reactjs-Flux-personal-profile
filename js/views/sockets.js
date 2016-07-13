var React = require('react');
//var socketio = require('socket.io');
var socketio = require('socket.io-client');
var SocketStore = require('../stores/stores');

var Sockets = React.createClass({
  _socketData: '',

  getSocketData: function(){
    //io.connect(http://127.0.0.1);
    //var socket = socketio.connect('http://127.0.0.1:8081/');
    var socket = socketio.connect('http://192.168.1.101:8081/');

    socket.on('clientReceiveMsg', function(data){
      // console.log('get server msg...');
      // console.log(data);

      this._socketData = data;
      //this.setState(data);
      this.setState(JSON.parse(data));
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
