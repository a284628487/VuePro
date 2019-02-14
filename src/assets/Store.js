var store = {
  state: {
    movies: []
  },
  setMovies(newValue) {
    // console.log('newValue = ' + newValue)
    this.state.movies = newValue
  },
}

export default store
