var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

  //createProfile: function(comment) {
  createProfile: function() {
    var action = {
      actionType: "CREATE_PROFILE"
      //,
      //comment: comment
    };

    console.log("dispatch==");
    AppDispatcher.dispatch(action);
  }
};
