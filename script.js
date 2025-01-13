// Create a button element
const button = document.createElement('button');

// Set the button's text
button.innerText = 'Click Me!';

// Add an event listener to the button
button.addEventListener('click', function() {
    alert('Button was clicked!');
});

// Append the button to the body (or any other element)
document.body.appendChild(button);
