console.log('Hello World')
document.getElementById("year").innerHTML = new Date().getFullYear();

// Add an event listener to the button with the ID "btn-alert"
document.getElementById('btn-alert').addEventListener('click', function() {
    // Display an alert when the button is clicked
    alert('see you next time');
});
 
// Get the button element by ID
const button = document.getElementById('btn-alert');
 
 
button.addEventListener('mouseover', function() {
    // Change the button label on mouseover
    button.innerText = 'See you next time';
});
 
 
button.addEventListener('mouseleave', function() {
    // Revert the button label when not hover
    button.innerText = 'Thanks for stopping by';
});

let count = 1;

document.getElementById('btn-counter').onclick = () => {
    count = count + 1;
    document.getElementById('txt-counter').innerHTML = `Number: ${count}`;

    // Check if the number is even or odd
    if (count % 2 === 0) {
        // Even number
        document.getElementById('txt-counter').classList.remove('odd');
        document.getElementById('txt-counter').classList.add('even');
    } else {
        // Odd number
        document.getElementById('txt-counter').classList.remove('even');
        document.getElementById('txt-counter').classList.add('odd');
    }
}
    
for (let i = 1; i <= 100; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = i;

    if (i % 2 === 0) {
        newLi.innerText += " (even)";
    } else {
        newLi.innerText += " (odd)";
    }

    document.getElementById('numbers').appendChild(newLi);
}

