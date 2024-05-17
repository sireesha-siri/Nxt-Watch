import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavigationAndComponentContainer,
  LoaderOrFailureContainer,
  FailureViewImage,
  NotFound,
} from './styledComponents'

const NotFoundRoute = () => (
  <div>
    <Header />
    <NavigationAndComponentContainer>
      <SideBar />
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme} = value
          const notFoundImage = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

          return (
            <LoaderOrFailureContainer value={lightTheme}>
              <FailureViewImage
                src={notFoundImage}
                alt="not found"
                value={lightTheme}
              />
              <NotFound value={lightTheme}>Page Not Found</NotFound>
              <NotFound value={lightTheme} as="p">
                we are sorry, the page you requested could not be found.
              </NotFound>
            </LoaderOrFailureContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    </NavigationAndComponentContainer>
  </div>
)

export default NotFoundRoute
