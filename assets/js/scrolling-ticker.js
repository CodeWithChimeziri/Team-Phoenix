// program to display the date and time
const date = new Date();
const day = date.toDateString();
const time = date.toLocaleTimeString();

document.getElementById("date").textContent = day;

document.getElementById("time").textContent = time;




  let x = document.getElementById("location");

  function showPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let positionInfo = " (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
            document.getElementById("location").innerHTML = positionInfo;
        });
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}

window.onload(showPosition());
