import React from 'react'

const NxtWatchContext = React.createContext({
  lightTheme: true,
  likesList: [],
  dislikesList: [],
  savedList: [],
  changeTheme: () => {},
  toggleLikedStatus: () => {},
  toggleDislikedStatus: () => {},
  toggleSavedStatus: () => {},
})

export default NxtWatchContext
