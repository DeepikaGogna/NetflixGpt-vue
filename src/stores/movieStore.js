import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movies', {
  state: () => ({
    nowPlayingMovies: [],
    trailerVideo: null,
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: []
  }),
  actions: {
    addNowPlayingMovies(payload) {
      this.nowPlayingMovies = payload
    },
    addTrailerVideo(payload) {
      this.trailerVideo = payload
    },
    addPopularMovies(payload) {
      this.popularMovies = payload
    },
    addTopRatedMovies(payload) {
      this.topRatedMovies = payload
    },
    addUpcomingMovies(payload) {
      this.upcomingMovies = payload
    }
  },
  // Getters: Derived state based on the store state
  getters: {
    hasNowPlayingMovies(state) {
      return state.nowPlayingMovies && state.nowPlayingMovies.length > 0
    },
    hasTrailerVideo(state) {
      return state.trailerVideo
    },
    haspopularMovies(state) {
      return state.popularMovies && state.popularMovies.length > 0
    },
    hastopRatedMovies(state) {
      return state.topRatedMovies && state.topRatedMovies.length > 0
    },
    hasUpcomingMovies(state) {
      return state.upcomingMovies && state.upcomingMovies.length > 0
    }
  }
})
