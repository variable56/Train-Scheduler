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

  
  
  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = 30;
  var database = firebase.database();

  //pushes most recent entry to firebase
$("#newTrain").on("click", function (event) {
  
  event.preventDefault();

  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  firstTrain = $("#firstTrain").val().trim();
  frequency = $("#frequency").val().trim();

  $("#trainName").val("");
  $("#destination").val("");
  $("#firstTrain").val("");
  $("#frequency").val("");

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  });
})
$(document).ready(function()  {
//gets the new data from firebase and appends it to the table in the DOM
database.ref().on("child_added", function (snapshot) {
  var sv = snapshot.val();
  if (!sv || !sv.trainName){
    return;
  }
  console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.firstTrain);
    console.log(sv.frequency);

    var tFrequency = sv.frequency;

    // Pulls time from firebase
    var firstTime = sv.firstTrain;

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));
    
  
  $("#trainBody").append("<tr><td>" + sv.trainName + "</td><td>" + sv.destination + "</td><td>" + sv.firstTrain + "</td><td>" + sv.frequency + "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + moment(currentTime).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
});



});
