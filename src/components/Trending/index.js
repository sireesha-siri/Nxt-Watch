import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import {GoPrimitiveDot} from 'react-icons/go'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavigationAndTrendingPartContainer,
  LoaderOrFailureContainer,
  TrendingComponentContainer,
  LoaderComponent,
  TrendingTopHeadContainer,
  TrendingLogo,
  TrendingVideoAndDetailsContainer,
  TrendingContainer,
  EachVideoThumbnailImage,
  LinkContainer,
  ChannelLogoVideoTitleInformationContainer,
  ChannelLogoImage,
  VideoTitleInformationContainer,
  VideoTitle,
  VideoInformation,
  ChannelTitle,
  ChannelsViewsAndUpdatedTime,
  PrimitiveDotChangingScreens,
  PrimitiveDot,
  ChannelViewAndUpdatedTimeContainer,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class TrendingRoute extends Component {
  state = {
    listOfVideosDetails: [],
    status: apiStatus.initial,
  }

  componentDidMount = () => {
    this.getListOfVideosData()
  }

  getListOfVideosData = async () => {
    this.setState({status: apiStatus.loading})

    const response = await fetch('https://apis.ccbp.in/videos/trending', {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    })

    if (response.ok) {
      const data = await response.json()

      this.setState({status: apiStatus.success})
      this.setState({listOfVideosDetails: data.videos})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderRoutePartOnDataResponse = lightTheme => {
    const {status, listOfVideosDetails} = this.state

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
            <FailureView retryFunction={this.getListOfVideosData} />
          </LoaderOrFailureContainer>
        )
      case apiStatus.success:
        return (
          <div>
            <TrendingTopHeadContainer theme={lightTheme}>
              <TrendingLogo as={HiFire} />
              <h1>Trending</h1>
            </TrendingTopHeadContainer>

            <TrendingContainer theme={lightTheme} data-testid="trending">
              {listOfVideosDetails.map(each => {
                const {channel} = each

                return (
                  <TrendingVideoAndDetailsContainer key={each.id}>
                    <LinkContainer as={Link} to={`/videos/${each.id}`}>
                      <EachVideoThumbnailImage
                        src={each.thumbnail_url}
                        alt="video thumbnail"
                      />
                      <ChannelLogoVideoTitleInformationContainer>
                        <ChannelLogoImage
                          src={channel.profile_image_url}
                          alt="channel logo"
                        />
                        <VideoTitleInformationContainer>
                          <VideoTitle value={lightTheme}>
                            {each.title}
                          </VideoTitle>
                          <VideoInformation>
                            <ChannelTitle>{channel.name}</ChannelTitle>
                            <ChannelViewAndUpdatedTimeContainer>
                              <PrimitiveDotChangingScreens
                                as={GoPrimitiveDot}
                              />
                              <ChannelsViewsAndUpdatedTime>
                                {each.view_count} views
                              </ChannelsViewsAndUpdatedTime>
                              <PrimitiveDot as={GoPrimitiveDot} />
                              <ChannelsViewsAndUpdatedTime>
                                {formatDistanceToNow(
                                  new Date(each.published_at),
                                  {
                                    addSuffix: true,
                                  },
                                )
                                  .split(' ')
                                  .reverse()
                                  .slice(0, 3)
                                  .reverse()
                                  .join(' ')}
                              </ChannelsViewsAndUpdatedTime>
                            </ChannelViewAndUpdatedTimeContainer>
                          </VideoInformation>
                        </VideoTitleInformationContainer>
                      </ChannelLogoVideoTitleInformationContainer>
                    </LinkContainer>
                  </TrendingVideoAndDetailsContainer>
                )
              })}
            </TrendingContainer>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <NavigationAndTrendingPartContainer>
          <SideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value

              return (
                <TrendingComponentContainer>
                  {this.renderRoutePartOnDataResponse(lightTheme)}
                </TrendingComponentContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </NavigationAndTrendingPartContainer>
      </div>
    )
  }
}

export default TrendingRoute
