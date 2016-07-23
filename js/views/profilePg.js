var React = require('react');
var ProfileStore = require('../stores/stores');
var clsMasonConf = require('../masonconf');
var oMasonConf = new clsMasonConf();


var ProfilePG = React.createClass({
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

                this.setState({getProfileState: xhr.readyState});
              }.bind(this);

    //xhr.open("GET", "http://192.168.1.101:8080/profile/1", true);
    if(oMasonConf.isDev == true){
      xhr.open("GET", "http://192.168.1.101:8080/profile/1", true);
    }else{
      xhr.open("GET", "https://mason-restful.herokuapp.com/profile/mason", true);
    }
    xhr.send();

  },

  onChange: function() {
    this.getProfile();
  },

  getInitialState: function() {
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
    return (
      <span>
        {this._profileData}
      </span>
    );
  },
});

module.exports = ProfilePG;
