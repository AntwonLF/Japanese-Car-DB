# Japanese-Car-DB

This project, Japanese-Car-DB, is a comprehensive backend CRUD (Create, Read, Update, Delete) application that serves as an extensive API for Japanese car information. Paired with a frontend designed as a virtual car meet, it allows users to access and manage details about various Japanese car makes and models, including year, specifications, and more. The application is developed using Node.js and Express for server-side operations, MongoDB for the database, and Mongoose for schema definition and interaction.

## Project Description 

The Japanese-Car-DB project is designed to cater to car enthusiasts and professionals alike, providing an engaging platform to explore and manage Japanese car information. The key functionalities include:

- **Adding New Entries**: Users can add new car entries to the database.
- **Retrieving Car Details**: Access detailed information about different car makes and models.
- **Updating Information**: Update existing car details to keep the database current.
- **Deleting Entries**: Remove outdated or incorrect car entries.
- **Virtual Car Meet**: A unique frontend experience where users can visually explore cars and their details.

## Technologies Used

- **Node.js & Express**: For robust server-side operations.
- **MongoDB**: As the primary database for storing car data.
- **Mongoose**: For database schema definition and interaction.
- **Postman/Insomnia**: For testing API and frontend interactions.
- **Additional Technologies**: User authentication, data handling with filtering, sorting, and pagination.

## Features

- **CRUD Operations**: Full Create, Read, Update, Delete capabilities for car data.
- **Virtual Car Meet Interface**: An engaging and interactive frontend.
- **Comprehensive Car Data**: Extensive information on Japanese car makes and models.
- **User Authentication**: Secure login and user management.
- **Advanced Data Handling**: Enhanced user experience with data filtering, sorting, and pagination.

## Getting Started
- Access the webaite by using this link:
https://jdm-r-us.netlify.app

- Once you are at the Home screen you can either got to the feed or navigate to the login page.

- At the login page signup and enjoy!!!

## Wireframes/Screenshots
 ![Alt text](<assets/Wireframe.png>)

### Develop App

- HomePage

![Alt text](<assets/Homepage.png>)

- Login

![Alt text](<assets/Login.png>)

- Feed

![Alt text](<assets/Feed.png>)

- Profile

![Alt text](<>)

## Timeline
Weekdays (Monday to Friday)
Morning
* 7:00 AM - 8:00 AM: Wake up and have breakfast
* 8:00 AM - 9:00 AM: Gym session (1 hour)
* 9:30 AM - 1:30 PM: Coding session (4 hours)
Afternoon
* 1:30 PM - 2:30 PM: Lunch break
* 2:30 PM - 5:30 PM: Flexible time (additional coding, rest, or other activities)
Evening
* 6:00 PM - 7:00 PM: Dinner
* 7:00 PM - 9:00 PM: Relaxation/Free Time
* 9:00 PM - 10:00 PM: Wind down/Prepare for bed
* 10:00 PM: Sleep
Weekends (Saturday and Sunday)
Morning
* 8:00 AM - 9:00 AM: Wake up and have breakfast
* 9:30 AM - 10:30 AM: Gym session (1 hour)
* 11:00 AM - 12:00 PM: Leisurely activity or additional coding
Afternoon
* 12:00 PM - 1:00 PM: Lunch
* 1:00 PM - 4:00 PM: Free time (could be used for coding if desired)
Evening
* 6:00 PM - 7:00 PM: Dinner
* 7:00 PM onwards: Relaxation/Free Time
* 10:00 PM: Sleep
Special Days: Christmas Eve and Christmas Day
Christmas Eve (December 24)
* Follow the weekend schedule.
* Evening: Celebrate Christmas Eve (adjust bedtime as needed).
Christmas Day (December 25)
* Enjoy a relaxed day with minimal coding.
* Engage in Christmas activities and celebrations.
* Meals and gym as per comfort and possibility.
Notes
* Coding: Aim for at least 4 hours of coding per day, but feel free to adjust based on your workload and energy levels.
* Gym: Consistent gym time helps maintain physical health and mental clarity.
* Sleep: Prioritize 8 hours of sleep to ensure rest and recovery.
* Flexibility: Adjust the schedule as needed, especially on weekends and holidays.

## Attributions

- https://mongoosejs.com/docs/guide.html.
- OpenAI ChatGPT for assistance with providing valuable insights and guidance.
- General Assembly Instructors Emre Surmeli and Greg Moreta.

## Next Steps

- Enhance the User Profile Page: Implement advanced functionalities such as 'likeToUserProfile' and 'AddCarToUserProfile'. This will enable users to personalize their profiles by liking other users or adding their favorite cars, fostering a more interactive and engaging community experience.

- Visual Upgrade for Car Database: Assign high-quality images to each car in the database. This visual representation will not only make the database more appealing but also provide users with a more immersive and informative browsing experience, allowing them to visually connect with the cars.

 - Incorporate Commenting Feature: Develop a robust commenting system that allows users to engage in discussions, share insights, and provide feedback about cars. This feature aims to enhance user interaction and community building, making the platform a dynamic space for car enthusiasts to connect and converse.

 - Revolutionize Car Cards with 3D Visualization and Detailed Information: Transform the presentation of cars on the platform by introducing 3D car cards. Each card will provide a detailed and interactive 3D view of the car, along with comprehensive information such as specifications, history, and unique features. This innovative approach will not only enrich the user experience but also set a new standard for online car databases.

## Technical Documentation

### Overview

JDM-R-Us is a web application dedicated to showcasing Japanese cars. It allows users to view, add, update, and delete car entries, as well as register and login to access personalized features.

### Frontend

Technologies Used

- HTML
- CSS
- JavaScript

Directory Structure

- Index.html: The main entry point of the application. Features links to login and view the car feed.
- Styles.css: Contains styling for the main page.

Key Features

- Welcome Page: A greeting and brief description of the site.
- Navigation Links: Direct users to either log in or view the car feed.
- Feed Directory
- Feed.css: Styles for the car feed page.
- Feed.html: Displays the car feed and provides functionality to add, update, and delete cars.
- Feed.js: Handles the interaction with the backend API for car operations.

### Backend

Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

Directory Structure

- Config: Contains the database configuration.
- Controllers: Business logic for handling requests (carController.js, userController.js).
- Data: Contains initial data for seeding the database.
- Models: Database models (Car.js, User.js).
- Routes: API routes (index.js).
- Scripts: Database seeding script (seed.js).
- Server.js: Entry point for the backend, setting up the server and middleware.
- API Endpoints

### Car Routes:

GET /api/cars: Fetch all cars.

POST /api/cars: Create a new car.

PUT /api/cars/:make/:model/:year: Update a specific car.

DELETE /api/cars/:make/:model/:year: Delete a specific car.

User Routes:

POST /api/users/register: Register a new user.

POST /api/users/login: Login a user.

POST /api/users/logout: Logout a user.

### Database Models

- Car: Represents a car with fields for make, model, and year.
- User: Represents a user with fields for email and password.

### Installation and Setup

 #### Frontend: 
 - Serve the front-end files using any static file server.

#### Backend:

- Install dependencies: npm install.
- Set environment variables for database connection and session secret.
- Run the server: node server.js.

### Usage
- Access the website via the front-end URL.
- Register or log in to interact with car data.
- View, add, update, or delete cars from the feed.

### Future Enhancements
- Implement user profiles and car likes.
- Enhance UI/UX design.
- Add more interactive features like car ratings or comments.


---

# Additional Notes

