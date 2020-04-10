import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCkJXg3Kd546wU9Dn3vsZWVHBsyphrGh54',
  authDomain: 'catch-of-the-day-wesbos-d95a1.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-wesbos-d95a1.firebaseio.com',
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
