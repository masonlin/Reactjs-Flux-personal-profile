var React = require('react');
var socketio = require('socket.io-client');
var SocketStore = require('../stores/stores');
var clsMasonConf = require('../masonconf');
var oMasonConf = new clsMasonConf();

var Sockets = React.createClass({
  _socketData: '',

  getSocketData: function(){
    //var socket = socketio.connect('http://192.168.1.101:8081/');
    if(oMasonConf.isDev == true){
      console.log('===f1===');
      var socket = socketio.connect('http://192.168.1.101:8081/');
    }else{
      // var socket = socketio.connect('https://mason-restful.herokuapp.com/');
      console.log('===f2===');
      var socket = socketio.connect('http://mason-restful.herokuapp.com');
    }

    socket.on('clientReceiveMsg', function(data){
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
      <span>
        {this._socketData}
      </span>
    );
  }

});

module.exports = Sockets;
