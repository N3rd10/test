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

// Create the main container
const container = document.createElement('div');
container.style.width = '300px';
container.style.margin = '0 auto';

// Create the tabs
const tabs = document.createElement('div');
tabs.style.display = 'flex';

// Create tab buttons
const tabNames = ['Tab 1', 'Tab 2', 'Tab 3'];
const tabContents = ['Content for Tab 1', 'Content for Tab 2', 'Content for Tab 3'];
const tabButtons = [];

tabNames.forEach((name, index) => {
    const button = document.createElement('button');
    button.textContent = name;
    button.style.flex = '1';
    button.style.padding = '10px';
    button.style.border = '1px solid #ccc';
    button.style.backgroundColor = '#f1f1f1';
    button.style.cursor = 'pointer';
    button.dataset.tab = `tab${index + 1}`;
    
    // Add click event listener
    button.addEventListener('click', () => {
        // Hide all contents
        tabContentsDivs.forEach(div => div.style.display = 'none');
        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.style.backgroundColor = '#f1f1f1';
            btn.style.borderBottom = '1px solid #ccc';
        });
        // Show the clicked tab's content
        const activeTab = document.getElementById(button.dataset.tab);
        activeTab.style.display = 'block';
        // Set the clicked button as active
        button.style.backgroundColor = '#fff';
        button.style.borderBottom = 'none';
    });

    tabs.appendChild(button);
    tabButtons.push(button);
});

// Create the content area
const contentArea = document.createElement('div');
contentArea.style.border = '1px solid #ccc';
contentArea.style.padding = '10px';

// Create tab content divs
const tabContentsDivs = tabContents.map((content, index) => {
    const div = document.createElement('div');
    div.id = `tab${index + 1}`;
    div.textContent = content;
    div.style.display = index === 0 ? 'block' : 'none'; // Show the first tab by default
    contentArea.appendChild(div);
    return div;
});

// Append tabs and content area to the container
container.appendChild(tabs);
container.appendChild(contentArea);

// Append the container to the body
document.body.appendChild(container);
