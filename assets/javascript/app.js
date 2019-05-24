var firebaseConfig = {
    apiKey: "AIzaSyC9gp23MGfmz3N6tzthQ4f2k6x_Elhqv6M",
    authDomain: "train-schedulder-project.firebaseapp.com",
    databaseURL: "https://train-schedulder-project.firebaseio.com",
    projectId: "train-schedulder-project",
    storageBucket: "train-schedulder-project.appspot.com",
    messagingSenderId: "927486429058",
    appId: "1:927486429058:web:69d87c7c33b600f4"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Initial Values
var name = "";
var destination = "";
var time = 0;
var frequency = "";

// Capture Button Click
$("#submit").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    time = $("#trainTime-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    if (name === "" || destination === "" || time === "" || frequency === "") {
        alert ("Please fill in the blanks");
    }
    else{
        
            database.ref().push({
                name,
                destination,
                time,
                frequency
            });
        }
});

                                 
database.ref().on("child_added", function (snapshot) {
  
    var trainName= snapshot.val().name;
    var trainDestination= snapshot.val().destination;
    var trainTime= snapshot.val().time;
    var trainFrequency= snapshot.val().frequency;
    
    $("#trainTable > tbody").append(
        $("<tr>").append(
            $("<td>").text(trainName), 
            $("<td>").text(trainDestination), 
            $("<td>").text(trainTime), 
            $("<td>").text(trainFrequency), 
        )
    )

});