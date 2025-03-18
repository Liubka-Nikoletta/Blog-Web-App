# Blog-Web-App
A simple web application for blogging created using Node.js, Express.js, and EJS. The application allows users to register, log in, create, view, edit and delete blog posts. User authentication ensures that only registered users can manage their posts. Currently, posts are not saved between sessions as this version does not have a database integrated.

## Table of Contents

1. [Stack](#stack)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)

## Stack
- Node.js: JavaScript runtime used to build the server-side logic.
- Express.js: Web framework for Node.js, used to create the server, handle HTTP requests, define routes, and manage middleware.
- EJS: Templating engine for rendering dynamic HTML content.

## Features
- User registration and login: Users can register and log in to manage their records.
- Multi-accounting: You can create multiple users and switch between them.
- Creating records: After logging in, users can create new blog posts.
- Viewing posts: The home page displays all existing posts, including posts by other users.
- Editing/deleting posts: Users can only edit and delete their own posts.

## Installation
To run this project locally, you'll need Node.js and npm (Node Package Manager) installed. Follow the steps below to set up the project on your local machine:

```bash
  git clone https://github.com/Liubka-Nikoletta/Blog-Web-App.git
  cd Blog\ Web\ App/
  npm install 
```
## Usage
After installing the project, start the application with the following command:

```bash
  node index.js
```

The application will be available at http://localhost:3000.

![User authentication](\public\image\userAuthentication.png)

To create or manage blogs, users need to register and log in.
Once logged in, they can access the blog management features.
You can create multiple accounts and switch between them.
![Home page](\public\image\home.png)

Creating posts: After logging in, users can create records by clicking the ‘Create new post’ button.
![Home page](\public\image\create.png)

Editing records: Users can only change the content of their own records by clicking the ‘Edit’ button.
![Edit post](\public\image\edit.png)

Viewing records: Users can view all records, including those of other users, by clicking the ‘View’ button.
![View page](\public\image\view.png)

Deleting records: Users can delete only their own records by clicking the ‘Delete’ button.
![Delete post](\public\image\delete.png)

