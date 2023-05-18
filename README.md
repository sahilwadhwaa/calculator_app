# Calculator App

A not-so simple calculator application that allows users to perform basic calculations and view their calculation history. The app provides a user-friendly interface for performing operations such as addition, subtraction, multiplication, division, and percentage calculations. Additionally, users have the ability to recalculate past calculations and delete entries from their history.

## Features

- Perform basic calculations: Users can utilize the calculator on the screen to perform simple mathematical operations like addition, subtraction, multiplication, division, and percentage calculations.
- Display calculated answer: The application shows the result of the calculation performed by the user.
- View calculation history: Users can view a list of their previous calculations, allowing them to keep track of their mathematical operations.
- Recalculate past calculations: The app provides an option to recalculate previous calculations, making it convenient for users to revisit and modify their previous results.
- Delete previous calculations: Users have the ability to remove specific entries from their calculation history, offering flexibility and organization.
- Responsive and intuitive UI: The user interface is designed to be accessible and responsive, ensuring a seamless user experience. Tailwind CSS is used to create an intuitive and visually appealing interface.
- Backend technology: The backend of the application is built using Node.js with the Express framework. MongoDB Atlas is used as the database to store user calculation history data, and the Mongoose library is employed to enforce a schema on the MongoDB documents.
- Frontend technology: The frontend can be implemented using React.js with Tailwind CSS to create a visually appealing and interactive user interface.

## Installation

To run the calculator app locally, follow these steps:

1. Clone the repository:
> git clone https://github.com/your-username/calculator-app.git

2. Navigate to the project directory:
> cd calculator-app

3. Install the dependencies:
> npm install

4. Set up the MongoDB Atlas database:
- Create a MongoDB Atlas account and set up a new cluster.
- Obtain the connection string for your cluster.
- Replace the placeholder MONGODB_URI in the .env file with your actual MongoDB connection string.

5. Start the application:
> npm start

6. Open your browser and visit http://localhost:3000 to access the calculator app.

## Contributing

Contributions to the calculator app are welcome! If you find a bug or want to add a new feature, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix: `git checkout -b feature/your-feature`.
3. Make the necessary changes and commit them: `git commit -m 'Add your commit message'`.
4. Push your changes to the branch: `git push origin feature/your-feature`.
5. Submit a pull request detailing your changes.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building responsive and intuitive user interfaces.
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - A fast, unopinionated, and minimalist web framework for Node.js.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - A cloud-based database service for MongoDB.
- [Mongoose](https://mongoosejs.com/) - An elegant MongoDB object modeling for Node.js.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
