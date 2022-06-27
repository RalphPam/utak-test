import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDRGeiql54c88mDrP21mIhlg_pZDM_rX6g',
  authDomain: 'utak-test-5dc35.firebaseapp.com',
  databaseURL: 'https://utak-test-5dc35-default-rtdb.firebaseio.com',
  projectId: 'utak-test-5dc35',
  storageBucket: 'utak-test-5dc35.appspot.com',
  messagingSenderId: '530404647478',
  appId: '1:530404647478:web:78b6a62992ecf33c09ae97',
}

const app = initializeApp(firebaseConfig)
getDatabase(app)
