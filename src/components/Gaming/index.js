import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import {
  NavigationSideBarComponentContainer,
  LoaderComponent,
  LoaderOrFailureContainer,
  HomeComponent,
  TrendingLogo,
  TrendingTopHeadContainer,
  TrendingContainer,
  TrendingVideoAndDetailsContainer,
  LinkContainer,
  EachVideoThumbnailImage,
  TitleGame,
  GameDetails,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {
    listOfGamesDetails: [],
    status: apiStatus.initial,
  }

  componentDidMount = () => {
    this.getListOfGamesData()
  }

  getListOfGamesData = async () => {
    this.setState({status: apiStatus.loading})

    const response = await fetch('https://apis.ccbp.in/videos/gaming', {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    })

    if (response.ok) {
      const data = await response.json()

      this.setState({status: apiStatus.success})
      this.setState({listOfGamesDetails: data.videos})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderRoutePartOnDataResponse = lightTheme => {
    const {status, listOfGamesDetails} = this.state

    switch (status) {
      case apiStatus.loading:
        return (
          <LoaderOrFailureContainer data-testid="loader" value={lightTheme}>
            <LoaderComponent
              as={Loader}
              type="ThreeDots"
              color="#4f46e5"
              height="50"
              width="50"
            />
          </LoaderOrFailureContainer>
        )
      case apiStatus.failure:
        return (
          <LoaderOrFailureContainer value={lightTheme}>
            <FailureView retryFunction={this.getListOfGamesData} />
          </LoaderOrFailureContainer>
        )
      case apiStatus.success:
        return (
          <>
            <TrendingTopHeadContainer theme={lightTheme}>
              <TrendingLogo as={SiYoutubegaming} />
              <h1>Gaming</h1>
            </TrendingTopHeadContainer>

            <TrendingContainer data-testid="gaming" theme={lightTheme}>
              {listOfGamesDetails.map(each => (
                <TrendingVideoAndDetailsContainer key={each.id}>
                  <LinkContainer as={Link} to={`/videos/${each.id}`}>
                    <EachVideoThumbnailImage
                      src={each.thumbnail_url}
                      alt="video thumbnail"
                    />
                    <TitleGame value={lightTheme}>{each.title}</TitleGame>
                    <GameDetails>{each.view_count} Watching</GameDetails>
                    <GameDetails>Worldwide</GameDetails>
                  </LinkContainer>
                </TrendingVideoAndDetailsContainer>
              ))}
            </TrendingContainer>
          </>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <NavigationSideBarComponentContainer>
          <SideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value
              return (
                <HomeComponent>
                  {this.renderRoutePartOnDataResponse(lightTheme)}
                </HomeComponent>
              )
            }}
          </NxtWatchContext.Consumer>
        </NavigationSideBarComponentContainer>
      </div>
    )
  }
}
export default Gaming
