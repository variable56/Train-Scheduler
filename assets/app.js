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

  
  // var trainNumber = 0;
  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = 30;
  var database = firebase.database();

  //pushes most recent entry to firebase
$("#newTrain").on("click", function (event) {
  // trainNumber++;
  event.preventDefault();
  alert("Train successfully added");
  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  firstTrain = $("#firstTrain").val().trim();
  frequency = $("#frequency").val().trim();

  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrain").val("");
  $("#frequency").val("");

  database.ref().push({
    // trainNumber: trainNumber,
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  })
})

//gets the new data from firebase and appends it to the table in the DOM
database.ref().on("child_added", function (snapshot) {
  var sv = snapshot.val();
  console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.firstTrain);
    console.log(sv.frequency);
    
  
  $("#trainBody").append("<tr><td>" + sv.trainNumber + "</td><td>" + sv.trainName + "</td><td>" + sv.destination + "</td><td>" + sv.firstTrain + "</td><td>" + sv.frequency + "</td><td></td><td></td></tr>");
})


