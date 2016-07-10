var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

//var comments = [];

var ProfileStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);    //callback 裡是當store收到新的action任務時，用來通知react view更新state用。
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  // getAll: function() {
  //   return comments;
  // }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case "CREATE_PROFILE":
      //comments.push(action.comment);
      ProfileStore.emitChange();
      break;

    default:
  }
});

module.exports = ProfileStore;