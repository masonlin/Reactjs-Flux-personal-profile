var React = require('react');
var ProfileStore = require('../stores/stores');
var clsMasonConf = require('../masonconf');
var oMasonConf = new clsMasonConf();

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

                this.setState({getProfileState: xhr.readyState});
              }.bind(this);      //bind this 後，這個匿名函式裡才能使用 this.setState

    //xhr.open("GET", "http://192.168.1.101:8080/user/0", true);  //true 表異步
    if(oMasonConf.isDev == true){
      xhr.open("GET", "http://192.168.1.101:8080/user/0", true);  //true 表異步
    }else{
      xhr.open("GET", "https://mason-restful.herokuapp.com/user/0", true);  //true 表異步
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
    var myname = (this._profileData ? JSON.parse(this._profileData).name : "")
    return (
      <span>
        {myname}
      </span>
    );
  },
});

module.exports = Profiles;
