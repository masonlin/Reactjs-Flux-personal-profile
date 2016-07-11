var React = require('react');

//var ProfileStore = require('../stores/profile-store');
var ProfileStore = require('../stores/stores');


var Profiles = React.createClass({
  _profileData: "",

  getProfile: function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
                if (xhr.readyState == 4) {
                  if (xhr.status == 0 || xhr.status == 200) {
                    this._profileData = xhr.responseText;
                  } else {
                    this._profileData='wrong';
                  }
                }else {
                  this._profileData='';
                }

                //this.setState({call_step: xhr.readyState});
                //this.setState({getProfileState: 1});
                this.setState({getProfileState: xhr.readyState});
              }.bind(this);      //bind this 後，這個匿名函式裡才能使用 this.setState

    xhr.open("GET", "http://127.0.0.1:8080/user/0", true);  //true 表異步
    xhr.send();

  },

  onChange: function() {
    //this.setState(getStateFromStore());
    this.getProfile();
  },

  getInitialState: function() {
    //return getStateFromStore();
    return {
      getProfileState: 0
    }
  },

  componentDidMount: function() {
    ProfileStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    ProfileStore.removeChangeListener(this.onChange);
  },

  render: function() {
    //console.log("State: " + this.state.getProfileState);

    // var name="";
    // if(this._profileData != ""){
		//   name = JSON.parse(this._profileData).name;  //parse JSON
	  // }else {
	  //   name = "fuck";
	  // }


    return (
      <div>
        {this._profileData}
      </div>
    );
  },
});

module.exports = Profiles;
