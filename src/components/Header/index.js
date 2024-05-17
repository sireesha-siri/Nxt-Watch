import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navbar,
  WebsiteLogo,
  NavItemsContainer,
  NavItem,
  NavItemButton,
  ProfileImage,
  HamburgerPopup,
  Icon,
  PopupContainer,
  PopupCloseButton,
  PopupItemsContainer,
  PopupItemsList,
  EachNavigationItemInPopUp,
  EachPopUpNavigationContainer,
  IconPopUp,
  EachNavigationItemName,
  HeaderLargeDisplayLogoutButtonContainer,
  HeaderLargeDisplayLogoutButton,
  LogoutPopUpContainer,
  LogoutPopUpText,
  CancelConfirmButtons,
  LogoutPopUpCancelButton,
  LogoutPopUpConfirmButton,
} from './styledComponents'

const Header = props => {
  const Logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {match} = props

  return (
    <NxtWatchContext.Consumer>
      {values => {
        const {lightTheme, changeTheme} = values

        const updateTheme = () => {
          changeTheme()
        }

        return (
          <Navbar value={lightTheme}>
            <Link to="/">
              <WebsiteLogo
                src={
                  lightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>

            <NavItemsContainer>
              <NavItem>
                <NavItemButton
                  type="button"
                  data-testid="theme"
                  onClick={updateTheme}
                >
                  {lightTheme ? (
                    <FaMoon />
                  ) : (
                    <FiSun style={{color: '#ffffff'}} />
                  )}
                </NavItemButton>
              </NavItem>

              <NavItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <HamburgerPopup>
                  <Popup
                    modal
                    trigger={
                      <NavItemButton type="button" className="trigger-button">
                        <Icon as={GiHamburgerMenu} value={lightTheme} />
                      </NavItemButton>
                    }
                  >
                    {close => (
                      <PopupContainer value={lightTheme}>
                        <PopupCloseButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                          value={lightTheme}
                        >
                          <IoMdClose />
                        </PopupCloseButton>

                        <PopupItemsContainer>
                          <PopupItemsList>
                            <EachNavigationItemInPopUp
                              selection={match.path === '/'}
                              theme={lightTheme}
                            >
                              <EachPopUpNavigationContainer
                                as={Link}
                                to="/"
                                // onClick={() => close()}
                              >
                                <IconPopUp
                                  as={AiFillHome}
                                  selection={match.path === '/'}
                                />
                                <EachNavigationItemName>
                                  Home
                                </EachNavigationItemName>
                              </EachPopUpNavigationContainer>
                            </EachNavigationItemInPopUp>
                            <EachNavigationItemInPopUp
                              selection={match.path === '/trending'}
                              theme={lightTheme}
                            >
                              <EachPopUpNavigationContainer
                                as={Link}
                                to="/trending"
                                // onClick={() => close()}
                              >
                                <IconPopUp
                                  as={HiFire}
                                  selection={match.path === '/trending'}
                                />
                                <EachNavigationItemName>
                                  Trending
                                </EachNavigationItemName>
                              </EachPopUpNavigationContainer>
                            </EachNavigationItemInPopUp>
                            <EachNavigationItemInPopUp
                              selection={match.path === '/gaming'}
                              theme={lightTheme}
                            >
                              <EachPopUpNavigationContainer
                                as={Link}
                                to="/gaming"
                                // onClick={() => close()}
                              >
                                <IconPopUp
                                  as={SiYoutubegaming}
                                  selection={match.path === '/gaming'}
                                />
                                <EachNavigationItemName>
                                  Gaming
                                </EachNavigationItemName>
                              </EachPopUpNavigationContainer>
                            </EachNavigationItemInPopUp>
                            <EachNavigationItemInPopUp
                              selection={match.path === '/saved-videos'}
                              theme={lightTheme}
                            >
                              <EachPopUpNavigationContainer
                                as={Link}
                                to="/saved-videos"
                                // onClick={() => close()}
                              >
                                <IconPopUp
                                  as={MdPlaylistAdd}
                                  selection={match.path === '/saved-videos'}
                                />
                                <EachNavigationItemName>
                                  Saved videos
                                </EachNavigationItemName>
                              </EachPopUpNavigationContainer>
                            </EachNavigationItemInPopUp>
                          </PopupItemsList>
                        </PopupItemsContainer>
                      </PopupContainer>
                    )}
                  </Popup>
                </HamburgerPopup>
              </NavItem>

              <NavItem>
                <HeaderLargeDisplayLogoutButtonContainer>
                  <Popup
                    modal
                    trigger={
                      <HeaderLargeDisplayLogoutButton
                        type="button"
                        className="trigger-button"
                      >
                        Logout
                      </HeaderLargeDisplayLogoutButton>
                    }
                  >
                    {close => (
                      <LogoutPopUpContainer value={lightTheme}>
                        <div>
                          <LogoutPopUpText>
                            Are you sure, you want to logout
                          </LogoutPopUpText>
                        </div>
                        <CancelConfirmButtons>
                          <LogoutPopUpCancelButton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogoutPopUpCancelButton>
                          <LogoutPopUpConfirmButton
                            type="button"
                            onClick={Logout}
                          >
                            Confirm
                          </LogoutPopUpConfirmButton>
                        </CancelConfirmButtons>
                      </LogoutPopUpContainer>
                    )}
                  </Popup>
                </HeaderLargeDisplayLogoutButtonContainer>

                <HamburgerPopup>
                  <Popup
                    modal
                    trigger={
                      <NavItemButton type="button" className="trigger-button">
                        <Icon as={FiLogOut} value={lightTheme} />
                      </NavItemButton>
                    }
                  >
                    {close => (
                      <LogoutPopUpContainer value={lightTheme}>
                        <div>
                          <LogoutPopUpText>
                            Are you sure you want to logout?
                          </LogoutPopUpText>
                        </div>
                        <CancelConfirmButtons>
                          <LogoutPopUpCancelButton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogoutPopUpCancelButton>
                          <LogoutPopUpConfirmButton
                            type="button"
                            onClick={Logout}
                          >
                            Confirm
                          </LogoutPopUpConfirmButton>
                        </CancelConfirmButtons>
                      </LogoutPopUpContainer>
                    )}
                  </Popup>
                </HamburgerPopup>
              </NavItem>
            </NavItemsContainer>
          </Navbar>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
