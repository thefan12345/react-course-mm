import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBGuI0aPYHHYqx98WhTQYg5q8NlaLhh8HU",
    authDomain: "expensify-da702.firebaseapp.com",
    databaseURL: "https://expensify-da702.firebaseio.com",
    projectId: "expensify-da702",
    storageBucket: "expensify-da702.appspot.com",
    messagingSenderId: "366125423583",
    appId: "1:366125423583:web:8e49a5807ac2739ce8426a"
 };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// database.ref('expenses').push({
//   description: 'Drinks',
//   note:'team bonding',
//   amount: 23030,
//   createdAt: 10002993
// });



//database.ref('notes/-LrJAokCNg_gtP9LxiH1').remove();

// database.ref('notes').push({
//   title: 'To Course topics',
//   body: 'React, Angular'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data: ', e)
// });

// database.ref().set({
//   name: 'Michael Matsoukas',
//   age: 36,
//   stressLevel: 6,
//   job: {
//     title: 'Software Dev',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//       city: 'London',
//       country: 'UK'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
// .remove()
// .then(() => {
//   console.log('Data succesfully removed');
// }).catch((e) => {
//   console.log('Remove failer, error: ', e);
// });