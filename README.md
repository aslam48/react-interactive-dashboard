## Overview

This project aims to create a dynamic and responsive dashboard for event management using React.js. The dashboard allows users to view events in different modes (list, day, week, month) and interact with them. It includes features like creating, editing, and deleting events.

## Table of Contents

- **Installation**: to kick start the project run Npm install to install all the necessary dependences 

- **usage**: to start this project run npm run dev



## Local Storage Usage

The application utilizes local storage for maintaining user-created events and todos within the browser. This approach was chosen for simplicity and to avoid the need for additional state management libraries like Context API or Redux.

### Why Local Storage?

- **Persistence**: Local storage provides a way to persistently store data on the user's device, ensuring that created events and todos are retained even if the user refreshes or closes the browser.
- **Simplicity**: For a relatively small-scale application, local storage is a straightforward solution, eliminating the need for more complex state management solutions like Context API or Redux.
- **Reduced Complexity**: By relying on local storage, the application maintains a lightweight structure without introducing the overhead of additional state management libraries.


## Libraries Used

### [Day.js](https://day.js.org/)
- **Purpose**: Date handling in a lightweight and modern way.
- **Why**: Chosen for its simplicity, lightweight size, and easy-to-use API.

### [Luxon](https://moment.github.io/luxon/)
- **Purpose**: Another library for date handling.
- **Why**: Selected for its modern API and features for working with dates and times.

### [React.js](https://reactjs.org/)
- **Purpose**: Building the user interface.
- **Why**: A popular and efficient library for building modern and scalable web applications.

### [React DOM](https://reactjs.org/docs/react-dom.html)
- **Purpose**: Rendering React components into the DOM.
- **Why**: Essential for React applications to interact with the DOM.

### [React Icons](https://react-icons.github.io/react-icons/)
- **Purpose**: Easy integration of icons in the React application.
- **Why**: Provides a vast collection of icons for enhancing the user interface.

### [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- **Purpose**: Navigation within the React application.
- **Why**: A widely used library for adding routing capabilities to React applications.

