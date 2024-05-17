import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.value ? '#f9f9f9' : '#181818 ')};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 5px #ebebeb;
  width: 350px;
  background-color: ${props => (props.value ? '#f9f9f9' : '#0f0f0f ')};
`

export const LogoDesign = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.value === true ? '#616e7c' : '#cccccc')};
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  cursor: pointer;
`
export const PasswordCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
  outline: none;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
  color: ${props => (props.value === false ? '#ebebeb' : null)};
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  height: 30px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
