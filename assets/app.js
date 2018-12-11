//Initialize Firebase using firebase code
var config = {
    apiKey: "AIzaSyDq1OEaYSmrdslXEbzBGBUdFCkzGwLzzB4",
    authDomain: "train-scheduler-3be9c.firebaseapp.com",
    databaseURL: "https://train-scheduler-3be9c.firebaseio.com",
    projectId: "train-scheduler-3be9c",
    storageBucket: "train-scheduler-3be9c.appspot.com",
    messagingSenderId: "851320733835"
  };
  firebase.initializeApp(config);

  //Make a variable for firebase

  var database = firebase.database();
  var trainNumber = 0;
  var trainName = 1;
  var destination = "";
  var firstTrain = "";
  var frequency = 30;

  //Create object for firebase db
  database.ref().set({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  })
