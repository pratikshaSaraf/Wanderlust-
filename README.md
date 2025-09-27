Wanderlust: The Accommodation Platform

Wanderlust- is a robust, full-stack web application designed as a clone of major accommodation discovery platforms like Airbnb. Built on the Node.js, Express, and EJS stack, it provides travelers with a seamless experience for discovering unique accommodations, managing their own listings, and leaving genuine reviews.
✨ Features

 RESTful CRUD Operations: Full create, read, update, and delete functionality for all accommodations (Listings), ensuring dynamic content management.

 Robust User Authentication: Secure user registration, login, and logout using Passport.js for session management.

 Review System: Users can submit and manage reviews and ratings for listings, contributing to community feedback.

 Server-Side Validation: Utilizes Joi schemas for rigorous input validation on the backend, ensuring data integrity.

 MVC Architecture: Follows the classic Model-View-Controller pattern for scalable, maintainable, and organized code structure.

 Responsive UI: A fully mobile-friendly design built with custom CSS, ensuring a great experience on any device.

 
 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

You need the following installed on your machine:

    Node.js

    MongoDB

Installation Steps

    Clone the Repository:

    git clone [https://github.com/pratikshaSaraf/Wanderlust-.git](https://github.com/pratikshaSaraf/Wanderlust-.git)
    cd Wanderlust-

    Install Dependencies:

    npm install

    Configure Environment Variables (Optional but Recommended):
    Create a .env file in the root directory for sensitive information, such as your MongoDB connection string.

    # Example .env content
    MONGO_URL="mongodb://127.0.0.1:27017/wanderlust"

    Seed the Database (Optional):
    To populate the database with initial dummy listings:

    # Run the initial data script located in the 'init' folder
    node init/index.js

    Start the Server:

    node app.js

    The application will typically run on http://localhost:8080.
