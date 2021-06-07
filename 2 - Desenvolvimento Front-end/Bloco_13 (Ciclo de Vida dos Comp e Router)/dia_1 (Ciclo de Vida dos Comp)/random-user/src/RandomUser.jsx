import React, { Component } from 'react';
import UserInfo from './UserInfo'

class RandomUser extends Component {
  constructor() {
    super()
    this.fetchRandomUser = this.fetchRandomUser.bind(this)
    this.state = {
      loading: false,
      userInfo: undefined,
    }
  }

  async fetchRandomUser () {
    const data = await fetch('https://api.randomuser.me/')
    const dataJson = await data.json()
    // PARA UTILIZAR MAP OU [INDEX] NO RENDER
    // this.setState({ userInfo: dataJson.results })
    // APENAS UM ITEM NO ARRAY
    this.setState({ userInfo: dataJson.results[0] })
  }

  componentDidMount() {
    this.fetchRandomUser()
  }

  shouldComponentUpdate(_, nextState) {
    return nextState.userInfo.dob.age <= 50;
  }

  render() {
    const { userInfo } = this.state
    return (
      <div className="App">
        <h1>
          User Information:
        </h1>
        <div>
          {(!userInfo) ? 'Loading' : (
            <UserInfo info={userInfo}/>
          )
          }
          {/* SE NÃO UTILIZAR [INDEX]
            {(!userInfo) ? 'Loading' : userInfo[0].gender}
          */}
          {/* COM MAP
            ***UTILIZAR O MODO CORRETO NO STATE***
            {(!userInfo) ? "Loading" : userInfo.map(({gender, email}) => {
              return (
                <div>
                  gender:{gender} email: {email}
                </div>
              )
            })}
          */}
        </div>
      </div>
    );
  }
}

export default RandomUser;