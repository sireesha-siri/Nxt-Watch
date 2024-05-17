import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginFormContainer,
  FormContainer,
  LogoDesign,
  InputContainer,
  InputLabel,
  UserInput,
  PasswordCheckboxContainer,
  Checkbox,
  ShowPasswordLabel,
  LoginButton,
  SubmitError,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  successSubmit = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })

    history.replace('/')
  }

  failSubmit = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.successSubmit(data.jwt_token)
    } else {
      this.failSubmit(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {values => {
          const {lightTheme} = values

          const getUsernameField = () => {
            const {username} = this.state

            return (
              <>
                <InputLabel htmlFor="username" value={lightTheme}>
                  USERNAME
                </InputLabel>
                <UserInput
                  id="username"
                  value={username}
                  type="text"
                  placeholder="Username"
                  onChange={event => {
                    this.setState({username: event.target.value})
                  }}
                />
              </>
            )
          }

          const getPasswordField = () => {
            const {password, showPassword} = this.state

            const passwordText = showPassword ? 'text' : 'password'

            return (
              <>
                <InputLabel htmlFor="password" value={lightTheme}>
                  PASSWORD
                </InputLabel>
                <UserInput
                  id="password"
                  value={password}
                  type={passwordText}
                  placeholder="Password"
                  onChange={event => {
                    this.setState({password: event.target.value})
                  }}
                />

                <PasswordCheckboxContainer>
                  <Checkbox
                    type="checkbox"
                    id="checkbox"
                    onChange={() => {
                      this.setState(prev => ({
                        showPassword: !prev.showPassword,
                      }))
                    }}
                  />
                  <ShowPasswordLabel htmlFor="checkbox" value={lightTheme}>
                    Show Password
                  </ShowPasswordLabel>
                </PasswordCheckboxContainer>
              </>
            )
          }

          return (
            <LoginFormContainer value={lightTheme}>
              <FormContainer onSubmit={this.submitForm} value={lightTheme}>
                <LogoDesign
                  src={
                    lightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />

                <InputContainer>{getUsernameField()}</InputContainer>

                <InputContainer>{getPasswordField()}</InputContainer>

                <LoginButton type="submit">Login</LoginButton>

                {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
