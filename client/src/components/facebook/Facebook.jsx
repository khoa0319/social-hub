import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    }
  }

  componentClicked = () => {
    console.log('clicked');
  }
  responseFacebook = (response) =>{
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email
    })
  }

  render() {    
    return (
      <div>
        <FacebookLogin
        appId="839052703122702"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        icon="fa-facebook" />
      </div>
    );
  }
}

export default Facebook;