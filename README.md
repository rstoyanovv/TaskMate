# TaskMate

## Description
**TaskMate** is a web application where you can record your daily tasks and then mark them as completed.

## Introduction
This is my first hobby project after months of learning of various technologies in JavaScript Ecosystem. I immediately wanted to apply what I had learned and I decided to create this project. 

## Technology Stack
For the structure I used the well-known `HTML5` and `CSS3` including the most popular CSS Framework `Bootstrap`. The project relies on `JavaScript` as the primary scripting language to add interactivity and dynamic behavior to the web application. I use `React` for building user interfaces and generally for making the frontend. The project's server-side environment is powered by `Node.js` which is responsible for server-side development, allowing for the handling of HTTP requests, file system operations, and database interactions. For the database I chose `PostgreSQL` because as the relational database management system it offers efficient solutions for storing and accessing the data. `NPM (Node Package Manager)` is used for package management, making it easy to install, update, and manage project dependencies.
<br />
<br />
[![Technologies](https://skillicons.dev/icons?i=html,css,nodejs,express,js,react,bootstrap,postgres)](https://skillicons.dev)

## Features
With **TaskMate** you can create a daily task and see what your daily schedule looks like. You can also checked them as completed and delete them from your list with task. The app give you the opportunity to see all your tasks including the archived ones.

## Getting started

### Prerequisites
Ensure you have Node.js, Git and PostgreSQL installed on your local machine.

### Installation
First clone the project repository to your local machine using Git. Then navigate into the both project directories separately (`todo-app` and `todo-frontend`) and run `npm install` command. This will install all dependencies that you will can find in `todo-app/package.json` and `todo-frontend/package.json`. 

### Configuration
Make sure to run the SQL code in PostgreSQL that you will find in `todo-app/src/databaseInitials/todos.sql`. Then create `.env` file in `todo-app` directory and fill the fields from `.env.template` file with your local variables.

### Start the application
Then, you can run the app peacefully from `todo-frontend` directory where you must write in your terminal `npm start`. This command will open automatically TaskMate in your browser.

## UI Showcase
![Screenshot Welcome Page](https://github.com/rstoyanovv/TaskMate/assets/115493787/b1004908-b687-427d-9919-d04df3e5e7ec)
<br />
<br />
![Screenshot Tasks Page](https://github.com/rstoyanovv/TaskMate/assets/115493787/929d48fd-ea63-4ff2-9fae-aa408d1e618e)
