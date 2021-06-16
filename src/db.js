
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyB8slLyafwCjEC1YKQEO6h3EnwZ5zi_otQ",
    authDomain: "proyectofinal-19768.firebaseapp.com",
    projectId: "proyectofinal-19768",
    storageBucket: "proyectofinal-19768.appspot.com",
    messagingSenderId: "984654672503",
    appId: "1:984654672503:web:d200d9ff87cf205cdb8c72",
    measurementId: "G-CLTXKBVVEH"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()







// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })

// Registros con plataformas de Terceros


  export default {
    auth: firebase.auth(),
    google() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result){
        console.log(result);
        
        
        
      })
      .catch(function(error){
        console.log("No Funciona")
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode,errorMessage, email,credential);
      })
    },
    logout(){
      firebase.auth().signOut()
      .then()
      .catch(function(error){
        console.log(error)
      })
    }
    
  }
