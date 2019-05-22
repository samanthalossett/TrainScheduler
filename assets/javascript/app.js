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
    // event.preventDefault();

    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    time = $("#trainTime-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    database.ref().set({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    });

});
// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function (snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().time);
    console.log(snapshot.val().frequency);

    // Change the HTML to reflect
    $("#name-display").text(snapshot.val().name);
    $("#email-display").text(snapshot.val().destination);
    $("#age-display").text(snapshot.val().time);
    $("#comment-display").text(snapshot.val().frequency);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

// database.ref().on("child_added", function (snapshot) {
//     var sv = snapshot.val();
//     console.log(sv.Name);
//     console.log(sv.Role);
//     console.log(sv.StartDate);
//     console.log(sv.MonthlyRate);

//     // $("#exampInputName").text(sv.employeeName);
//     // $("#companyRole").text(sv.companyRole);
//     // $("#startDate").text(sv.startDate);
//     // $("#monthlyRate").text(sv.monthlyRate);

//     var newRow=$("<tr>");
//    newRow.html("<td>" + sv.Name + "</td>" + "<td>" + sv.Role + "</td>" + "<td>" + sv.StartDate + "</td>" + "<td>" + sv.MonthlyRate + "</td>")

//     $("#tbody").append(newRow);
//  })