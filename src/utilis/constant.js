export const LOGO =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const TMTB_API_KEY = 'b462f6c639b0e1fca885284846196e23'
export const TMTB_API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDYyZjZjNjM5YjBlMWZjYTg4NTI4NDg0NjE5NmUyMyIsIm5iZiI6MTcyNzI0MTQyMy4xOTM3NTQsInN1YiI6IjY2ZjM5YjhmM2E5NWE1YmNkYTIyZTUxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M9jiJuZ6q44QZeoN3pqFlq5ddAuqy8gDX-9fqB0HJDg'
export const MOVIE_VIDEO = 'https://api.themoviedb.org/3/movie/movieId/videos?language=en-US'
export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + TMTB_API_TOKEN
  }
}
export const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
export const IMAGE_CDN_URL = 'https://image.tmdb.org/t/p/w500/'
export const POPULAR_PLAYING = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
export const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
export const UPCOMING_MOVIE = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
export const SUPPORTED_LANGUGAGE = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hi', name: 'Hindi' },
  { identifier: 'de', name: 'German' }
]
export const OPENAI_API_KEY =
  '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'
export const SEARCH_MOVIE =
  'https://api.themoviedb.org/3/search/movie?query=movie_name&include_adult=false&language=en-US&page=1'
export const BK_IMG =
  'https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg'
