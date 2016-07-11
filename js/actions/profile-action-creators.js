var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

  createProfile: function() {
    var action = {
      actionType: "CREATE_PROFILE"
    };

    //console.log("dispatch==");
    AppDispatcher.dispatch(action);
  }
};
