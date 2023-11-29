console.log('Hello World')
document.getElementById("year").innerHTML = new Date().getFullYear();

// Add an event listener to the button with the ID "btn-alert"
document.getElementById('btn-alert').addEventListener('click', function() {
    // Display an alert when the button is clicked
    alert('Click the Link on the Left');
});
 
// Get the button element by ID
const button = document.getElementById('btn-alert');
 
 
button.addEventListener('mouseover', function() {
    // Change the button label on mouseover
    button.innerText = 'Click the Link on the left';
});
 
 
button.addEventListener('mouseleave', function() {
    // Revert the button label when not hover
    button.innerText = 'Wanna hear from me?';
});
