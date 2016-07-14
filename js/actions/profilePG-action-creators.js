var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

  createProfilePG: function() {
    var action = {
      actionType: "CREATE_PROFILE_PG"
    };

    //console.log("dispatch==");
    AppDispatcher.dispatch(action);
  }
};
