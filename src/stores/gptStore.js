import { defineStore } from 'pinia'

export const useGPTStore = defineStore('gpt', {
  state: () => ({
    showGptSearch: false,
    moviesResult: [],
    moviesName: null,
    isLoadingSearchedMovies: false
  }),
  actions: {
    toggleGptSearchView() {
      this.showGptSearch = !this.showGptSearch
    },
    addGPTSearchedMovies(payload) {
      const { moviesResult, moviesName } = payload
      this.moviesName = moviesName
      this.moviesResult = moviesResult
      this.isLoadingSearchedMovies = false
    },
    setLoadingSearchedMovies(status) {
      this.isLoadingSearchedMovies = status
    }
  },
  getters: {
    hasLoadingSearchedMovies(state) {
      return state.moviesResult
    },
    isSearchedLoadingMovies(state) {
      return state.isLoadingSearchedMovies
    }
  }
})
