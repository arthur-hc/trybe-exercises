import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const {info:{name:{ title, first, last }, email, dob:{ age }, picture }} = this.props
    return(
      <div className="informations-div">
        <img src={picture.large} alt="Person"/>{}
        <div>
          {title} {first} {last}
        </div>
        <div>
          E-mail:<br/> {email}
        </div>
        <div>
          {age}
        </div>
      </div>
    )
  }
}

export default UserInfo;
// exibindo foto, nome, email e idade do usuário.