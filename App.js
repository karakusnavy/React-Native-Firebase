import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import * as firebase from 'firebase';



var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  InsertExample() {
    firebase.database().ref('users/003').set(
      {
        name: 'Samed Karakuş',
        age: '19'
      }
    ).then(() => {
      console.log('Inserted.')
    }).catch((error) => {
      console.log(error)
    })
  }

  GetExample() {
    firebase.database().ref('users').once('value', (data) => {
      console.log(data.toJSON())
    })
  }

  GetExampleLive() {
    // Bu bölüm de veritabanından veri çektikten sonra
    // veritabanında bir güncelleme olursa buda güncellenir. 
    // dikkat edersen get example 'da .once kullandık bunda .on
    firebase.database().ref('users').on('value', (data) => {
      console.log(data.toJSON())
    })
    // test etmek için timer ile 5 saniye sonra bir veri ekliyorum görebil diye.
    setTimeout(() => {

      firebase.database().ref('users/005').set(
        {
          name: 'Baba',
          age: '88'
        }
      ).then(() => {
        console.log('Inserted.')
      }).catch((error) => {
        console.log(error)
      })


    }, 5000)
  }

  UpdateExample()
  {
    firebase.database().ref('users/005').update({
      name:'Babacorç'
    }).then(()=>{
      console.log('Updated')
    })
  }

  DeleteExample(){
    firebase.database().ref('users/005').remove();
  }

  componentWillMount() {


   
    


  }


  render() {
    return (
      <View>
        <Text>
          Hello Firebase @karakusnavy
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});

