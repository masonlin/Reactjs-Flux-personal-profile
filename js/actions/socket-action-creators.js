var AppSocketDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

  createSocket: function(){
    var action = {
      actionType: "CREATE_SOCKET"
    };


    AppSocketDispatcher.dispatch(action);
  }
};
