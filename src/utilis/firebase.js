// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBnILkoBhKwG3ldxQGJ6P01EIjAJKwYq7Y',
  authDomain: 'netflix-gpt-vue.firebaseapp.com',
  projectId: 'netflix-gpt-vue',
  storageBucket: 'netflix-gpt-vue.appspot.com',
  messagingSenderId: '785312172433',
  appId: '1:785312172433:web:6d60e9a010111596123230',
  measurementId: 'G-TDKEZKXSGB'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
