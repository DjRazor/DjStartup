var isLoggedIn = false;
document.addEventListener("DOMContentLoaded", function () {
    
    // Get references to the header elements
    var InList = document.getElementById("loggedInList");
    var OutList = document.getElementById("loggedOutList");
    
    var name = localStorage.getItem('loginUsername');

    function toggleHeader() {
    
    if (name !== null) {
        isLoggedIn = true;
    }

    if (isLoggedIn) {
        // If the condition is true
        InList.style.display = "in-line";
        OutList.style.display = "none";

    } else {
        // If the condition is false
        InList.style.display = "none";
        OutList.style.display = "in-line";
    }
    }
    toggleHeader();
    
});