import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {lightTheme: true, likedList: [], dislikedList: [], savedList: []}

  changeTheme = () => {
    this.setState(prev => ({lightTheme: !prev.lightTheme}))
  }

  toggleLikedStatus = id => {
    this.setState(prevState => ({
      likedList: prevState.likedList.includes(id)
        ? prevState.likedList.filter(each => each !== id)
        : [...prevState.likedList, id],
      dislikedList: prevState.dislikedList.filter(each => each !== id),
    }))
  }

  toggleDislikedStatus = id => {
    this.setState(prevState => ({
      dislikedList: prevState.dislikedList.includes(id)
        ? prevState.dislikedList.filter(each => each !== id)
        : [...prevState.dislikedList, id],
      likedList: prevState.likedList.filter(each => each !== id),
    }))
  }

  toggleSavedStatus = videoDetails => {
    const {savedList} = this.state
    const savedListIds = savedList.map(each => each.id)
    const newList = savedListIds.includes(videoDetails.id)
      ? savedList.filter(each => each.id !== videoDetails.id)
      : [...savedList, videoDetails]
    this.setState({savedList: newList})
  }

  render() {
    const {lightTheme, likedList, dislikedList, savedList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          lightTheme,
          likedList,
          dislikedList,
          savedList,
          changeTheme: this.changeTheme,
          toggleLikedStatus: this.toggleLikedStatus,
          toggleDislikedStatus: this.toggleDislikedStatus,
          toggleSavedStatus: this.toggleSavedStatus,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
