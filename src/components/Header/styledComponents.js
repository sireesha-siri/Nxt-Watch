import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => (props.value === true ? '#f9f9f9 ' : '#181818')};
`

export const WebsiteLogo = styled.img`
  width: 50%;
  margin: 20px;
`

export const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  list-style-type: none;
  width: 40%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`
export const NavItem = styled.li`
  text-align: center;
  display: flex;
  justify-content: center;
`

export const NavItemButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 10px;
  font-size: 25px;
`

export const ProfileImage = styled.img`
  @media screen and (min-width: 768px) {
    display: block;
    width: 35px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HamburgerPopup = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Icon = styled.p`
  color: ${props => (props.value ? null : '#ffffff')};
`

export const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 5px #ebebeb;
  background-color: ${props => (props.value === true ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupCloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 10px;
  font-size: 25px;
  color: ${props => (props.value === true ? null : '#ffffff')};
`

export const PopupItemsContainer = styled.div`
  height: 100%;
`
export const PopupItemsList = styled.ul`
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0;
  list-style-type: none;
`

export const EachNavigationItemInPopUp = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => {
    if (props.selection === true) {
      return props.theme === true ? '#e2e8f0' : '#212121'
    }
    return null
  }};
`

export const EachPopUpNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #475569;
  font-weight: 500;
  height: 35px;
  margin-right: 0;
  margin-left: 0;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;
  text-decoration: none;
  min-width: 230px;
`

export const IconPopUp = styled.p`
  color: ${props => (props.selection === true ? 'red' : null)};
`

export const EachNavigationItemName = styled.p`
  margin: 30px;
`

export const HeaderLargeDisplayLogoutButtonContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const HeaderLargeDisplayLogoutButton = styled.button`
  cursor: pointer;
  border: 2px solid #4f46e5;
  color: #4f46e5;
  background-color: transparent;
  padding: 5px;
  font-size: 15px;
  border-radius: 3px;
`

export const LogoutPopUpContainer = styled.div`
  background-color: ${props => (props.value === true ? '#ffffff' : '#000000')};
  text-align: center;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px #ebebeb;
`
export const LogoutPopUpText = styled.p`
  font-size: 16px;
  color: #00306e;
  font-weight: 500;
`
export const LogoutPopUpCancelButton = styled.button`
  background-color: transparent;
  color: #7e858e;
  border: 1.5px solid #00306e;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
`

export const LogoutPopUpConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: 1.5px solid #3b82f6;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
`
export const CancelConfirmButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`
