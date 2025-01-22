// fetch-data.js

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Select the container to display data

    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // Parse the response JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create an unordered list element
        const userList = document.createElement('ul');

        // Iterate through the users and add them as list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as the text
            userList.appendChild(listItem); // Append the list item to the list
        });

        // Append the entire list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors
        console.error('Failed to fetch user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Execute the fetchUserData function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
