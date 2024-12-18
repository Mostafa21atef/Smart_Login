function displayUser() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.name) {
        const welcomeMessage = document.getElementById("welcomeMessage");
        if (welcomeMessage) {
            welcomeMessage.textContent = `Welcome, ${currentUser.name}!`;
        } else {
            console.error("Element with id 'welcomeMessage' not found.");
        }
    }
}
function logoutUser() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", displayUser);
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", logoutUser);
    } else {
        console.error("Logout button not found.");
    }
});
