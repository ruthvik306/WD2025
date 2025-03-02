function showMessage() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() !== "") {
        document.getElementById("message").textContent = `Hello, ${name}! Welcome to my GitHub Page.`;
    } else {
        document.getElementById("message").textContent = "Please enter your name!";
    }
}
