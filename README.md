Task: Building a Role-Based Access Control System with Real-Time Notifications

Build a RESTful API that allows users to register, login, and access resources based on their roles (admin, user). The system should also support real-time notifications using WebSockets.

Requirements:

User Authentication
Implement user registration and login functionality.
Passwords must be hashed using bcrypt.
Use JWT (JSON Web Tokens) for authentication. Tokens should be valid for a certain period (1 hour).
Refresh tokens must be implemented and stored in a secure way.
Role-Based Access Control (RBAC)
Implement three user roles: Admin, Moderator, and User.
Admins can access all routes and perform CRUD operations on any resource.
Moderators can perform CRUD operations on a specific set of resources.
Users can only access their own data and perform limited operations.
Create middleware that checks for the user’s role and restricts access to certain routes based on their role.
CRUD Operations
Implement CRUD operations for a `Post` model, where each post has a `title`, `content`, `author`, and `timestamps`.
Admins and Moderators can create, read, update, and delete any post.
Users can create posts and only read, update, and delete their own posts.
For pagination and search for use same list api
Real-Time Notifications
Implement WebSocket functionality using `socket.io` to notify users in real-time when a post they created is commented on.
When a user comments on a post, the post's author should receive a real-time notification.
Notifications should include the comment's author, content, and timestamp.
Make small frontend application for show notification
Database
Use MongoDB / MySql / PostgreSQL / SQLite as the database.
Use MongoDB / MySql / PostgreSQL / SQLite for schema definition and data validation.
Implement data models for `User`, `Post`, and `Comment`.
The table should be auto generated whenever server start
Use a transaction (session) when communicating with multiple tables in a single API call
Testing
Write unit tests for the authentication, RBAC, and CRUD operations.
Ensure that edge cases are covered, such as invalid JWT tokens, unauthorized access, and data validation errors.
Documentation
Document the API endpoints using Swagger or a similar tool.
Include instructions on how to set up the project, run the tests, and start the server.

Deliverables:
A GitHub repository with a `README.md` file containing setup instructions.
The fully functional Node.js application.
A Postman collection or Swagger documentation for testing the API.
Unit tests with at least 80% code coverage.


Deadline:

Best time to submit the task is within 48hrs of receiving the task Description.
