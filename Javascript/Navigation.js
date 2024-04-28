// Load the navbar using JavaScript
document.addEventListener("DOMContentLoaded", function() {
    fetch("../Page-Inserts/Navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});