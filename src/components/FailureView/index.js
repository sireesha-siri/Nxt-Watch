import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailureViewImage,
  FailureTextSomethingWentWrong,
  HavingTroubleText,
  RetryButton,
} from './styledComponent'

const FailureView = props => {
  const {retryFunction} = props

  const retry = () => {
    retryFunction()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value
        const failureViewImage = lightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <>
            <FailureViewImage
              value={lightTheme}
              src={failureViewImage}
              alt="failure view"
            />
            <FailureTextSomethingWentWrong value={lightTheme}>
              Oops! Something Went Wrong
            </FailureTextSomethingWentWrong>
            <HavingTroubleText>
              We are having some trouble to complete your request. Please try
              again.
            </HavingTroubleText>
            <RetryButton type="button" onClick={retry}>
              Retry
            </RetryButton>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
