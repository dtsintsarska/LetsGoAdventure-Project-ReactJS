Let's Go Adventure web site. Built as web project for the ReactJS course at SoftUni.

Let's Go Adventure is a web site for a company, which organizes and offers adventures in Bulgaria and around the world. The company organizes adventure of all kinds with professional mountain guides for more than 10 years.

Let's Go Adventure web application has three levels of access to it's content: administrator, registered user and guest user roles are implemented.

- The Administrators have full access to the system and permissions to administer all adventures. The Administrator is authorized to create and delete adventures. All adventures include information to the following: information about destination, description, price, main image of adventure, days, date, other photos in adventure's gallery, etc. Everyone of users with administator role is authorized to review all adventures, in which he/she is enrolled, including review all other participants info details (email, phone, full names).
  The following sections are available only to the Administrator: "Create New Adventure" / "Delete Adventure"; "My Profile" -> list of all participants.

- After registration and/or successful Login to the system, a registered user is authorized to access all adventure's information, including the opportunity to enroll to the advenure, and write and post comment about the adventure.
  The registered user have access to: "Details Adventure Page" -> "Become part of this adventure Page" -> Submit form and enroll for this adventure; If user is already enrolled for the current adventure, he/she can write and post comment about it - "Details Adventure Page" -> "Write comment about this adventure"; In "My Profile" page the registered user can review all adventures, in which he/she is enrolled.

- The guest user has access to general information about Let's Go Advenutres, including Details Page for the adventures. Every adventure's information includes detailed day by day program of the adventure, guide's name, period, price, gallery with photos of the adventure destionation, available seats, etc. The following pages are public and visible to any visitor of the wev site : "Our Adventures", "Our team", "Contacts", "About us", "Register", "Login". All users can make search request by category of the adventure or by name of the adventure.

The application is built with ReactJS (client side) and NodeJS/ ExpressJS (server side).

REST API and DB

The repository of the REST API is available at: https://github.com/dtsintsarska/ExpressJS-LetsGoAdventure.git . The used DB is cloud version of MongoDB - Mongo Atlas.
Resolve Dependencies

When the project is cloned or downloaded, type in the terminal the following in both Server and Client directory to install all required dependecies:

### `npm install`

Run the web server

To run the web server with nodemon type in terminal the following:

### `npm run start`

Run the React app

The app uses React on client side. To run the React app type in terminal the following:

### `npm start`

Run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Sign in to the web application as Administrator

In order to log in as administrator, use the following credentials:

username: Emma-Emma
password: Emma-Emma
