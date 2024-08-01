# User Profiles with Search Functionality

## Overview

This project renders a list of user profiles and implements a search feature to filter through the profiles based on the user's input. The application uses React for dynamic data rendering, state management, and real-time search functionality.

## Features

- Render a dynamic list of user profiles.
- Implement search functionality to filter profiles by name.
- Optimize search efficiency using memoization.
- Styled for a pleasant user experience.

## Running the Project

1. Open `index.html` in a modern web browser (such as Google Chrome, Firefox, or Safari).
2. The application will load and display a list of user profiles.
3. Use the search input field to filter profiles by name in real-time.

## Code Explanation

The project consists of the following components:

- `UserProfile`: A functional component that displays user details (name, email, phone).
- `App`: The main component that manages the state for the list of users and the search query. It renders the search input field and the list of filtered user profiles.

The search functionality is implemented using React's state management and memoization to optimize performance.
