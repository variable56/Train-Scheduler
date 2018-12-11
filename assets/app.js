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
  var trainNumber = 1;
  var trainName = "Starlight Express";
  var destination = "Seattle";
  var firstTrain = "13:00";
  var frequency = 30;

  //Create object for firebase db
  database.ref().set({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  })

  //pushes most recent entry to firebase
$("#newTrain").on("click", function (event) {
  event.preventDefault();
  alert("Train successfully added");
  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  firstTrain = $("#firstTrain").val().trim();
  frequency = $("#frequency").val().trim();

  $("#employeeNameValue").val("");
  $("#employeeRoleValue").val("");
  $("#startDateValue").val("");
  $("#monthlyRateValue").val("");

  database.ref().push({
      name: name,
      role: role,
      date: date,
      rate: rate,
      dateAdded: moment().format()
  })
})
