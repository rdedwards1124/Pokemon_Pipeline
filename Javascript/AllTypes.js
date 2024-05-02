// Load the Type Symbols using JavaScript
document.addEventListener("DOMContentLoaded", function() {
    fetch("../Page-Inserts/AllTypes.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("AllTypes").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});