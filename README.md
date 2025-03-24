# EmployWise Front-End Assignment - React User Management App

This project is a React application that integrates with the Reqres API to perform basic user management functions, as outlined in the EmployWise Front-End Assignment. It includes user authentication, user listing, and the ability to edit and delete user information.

## Overview

This React application is designed to manage user data fetched from the Reqres API. It provides a user-friendly interface for performing CRUD (Create, Read, Update, Delete) operations on user records. The project follows a three-level structure of increasing complexity, including authentication, user listing with pagination, and user editing and deletion.

## Features

- **Authentication**: Users can log in using valid credentials.
- **User Listing**: Displays a paginated list of users with their first name, last name, and avatar.
- **Pagination**: Implements pagination to navigate through different pages of users.
- **Edit User**: Allows updating the user's first name, last name, and email.
- **Delete User**: Removes the user from the list.
- **Persistence**: Stores the login token in local storage to maintain user sessions.
- **Protected Routes**: Redirects users to the login page if the token is missing or expired.
- **Responsive UI**: The user interface is designed to be responsive and work well on both desktop and mobile devices.

## Technologies Used

- **React**: Frontend framework.
- **React Router**: For navigation between pages.
- **Axios**: For making HTTP requests to the Reqres API.
- **Tailwind CSS**: For styling the user interface.
- **Context API**: For state management.
- **Local Storage**: For persisting the login token.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 12 or higher. ([https://nodejs.org/](https://nodejs.org/))
- **npm** (Node Package Manager): Usually comes with Node.js.
- **Git**: For cloning the repository. ([https://git-scm.com/](https://git-scm.com/))

### Installation

1.  **Clone the repository**:

    git clone [repository-link]
    cd [project-directory]

2.  **Install dependencies**:

    npm install

3.  **Run the Repo**
    npm run dev

### Configuration

No specific configuration is required as the project uses the Reqres API directly. However, you might want to configure environment variables for different environments (development, production, etc.).

## Running the Application

To start the application, use the following command:
npm run dev

## API Endpoints

The application uses the following Reqres API endpoints:

- **POST /api/login**: For user authentication.
- **GET /api/users?page={page}**: For fetching the list of users with pagination.
- **PUT /api/users/{id}**: For updating user details.
- **DELETE /api/users/{id}**: For deleting a user.

## Assumptions and Considerations

- The application uses `localStorage` for token persistence, which might have security implications for sensitive data.
- The design focuses on meeting the assignment requirements and might lack advanced UI/UX features.
- The Reqres API is a mock API, and its availability and behavior might change.

## Error Handling

The application handles API errors gracefully by displaying appropriate error messages to the user. Form validation is implemented in the login and edit screens to ensure data integrity.
