import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCfKVcgS4dn2AfwcCtGCjZTIn3Y20_oR4M',
  authDomain: 'nudge-6837d.firebaseapp.com',
  databaseURL: 'https://nudge-6837d.firebaseio.com',
  projectId: 'nudge-6837d',
  storageBucket: '',
  messagingSenderId: '523965971257',
  appId: '1:523965971257:web:fc69c0dce8efaa67'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebaseApp.firestore()

export {firestore, firebaseApp}
