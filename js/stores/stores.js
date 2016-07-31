var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

//var comments = [];

//var ProfileStore = assign({}, EventEmitter.prototype, {
var Stores = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);    //callback 裡是當store收到新的action任務時，用來通知react view更新state用。
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

  // getAll: function() {
  //   return comments;
  // }
});

// var SocketStore = assign({}, EventEmitter.prototype, {
//   emitSocketConnet: function() {
//     this.emit('socketConnet');
//   },
//
//   addSocketConnectListener: function(callback) {
//     this.on('socketConnet', callback);    //callback 裡是當store收到新的action任務時，用來通知react view更新state用。
//   },
//
//   removeSocketConnectListener: function(callback) {
//     this.removeListener('socketConnet', callback);
//   }
// });

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case "CREATE_PROFILE":
      //comments.push(action.comment);
      //ProfileStore.emitChange();
      Stores.emitChange();
      break;

    case "CREATE_SOCKET":
      //SocketStore.emitSocketConnet();
      // ProfileStore.emitChange();
      Stores.emitChange();
      break;

    case "CREATE_SOCKET_PG":
      Stores.emitChange();
      break;

    default:
  }
});

module.exports = Stores;
