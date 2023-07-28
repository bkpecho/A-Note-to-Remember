![A Note to Remember](/README.png)

## A Note to Remember (Note Taking App) 🌻

A Note to Remember is a full-stack MERN (MongoDB, Express, React, Node.js) app that helps you keep track of important notes, reminders, and tasks.

### Technologies Used

- MongoDB
- Mongoose
- Express
- Node.js
- Vite
- React
- React Router
- Render for deployment

### Live Site

Visit the live site: [A Note to Remember](https://anotetoremember.onrender.com/)

### GitHub Repository

Find the source code on GitHub: [A Note to Remember Repository](https://github.com/bkpecho/A-Note-to-Remember/)

### Setting Up Local Environment

**Frontend Environment Variable**

1. Create a `.env.local` file in the frontend root directory.
2. Add the following line to the `.env.local` file, replacing the URL with your backend server address:

   ```
   VITE_SERVER_URL=http://localhost:8000
   ```

**Backend Environment Variable**

1. Create a `.env` file in the backend root directory.
2. Add the following line to the `.env` file, replacing the placeholder in the MongoDB URI with your actual MongoDB cluster information:

   ```
   MONGODB_URI=mongodb+srv://username:password@your-mongodb-cluster-here/Note
   ```

**Important**: Remember not to commit the `.env.local` and `.env` files to the public repository to keep sensitive information secure.

## Project Status and Future Improvements

A Note to Remember is currently a barebone implementation, serving as a functional starting point for a Note-taking app. While it provides essential features for managing notes, there are still numerous opportunities for enhancements and additional functionalities.

### Potential Areas for Improvement

- **User Authentication:** Implement user authentication to secure user data and enable personalized note management.
- **Rich Text Editor:** Enhance the note-taking experience by adding a rich text editor for formatting and styling notes.
- **Categories and Tags:** Allow users to categorize and tag notes for better organization and quick retrieval.
- **Search Functionality:** Implement a search feature to facilitate finding specific notes based on content or keywords.
- **Mobile Responsiveness:** Improve the app's responsiveness to different screen sizes, enhancing the user experience on mobile devices.

### Author

- **Bryan King Pecho**
  - GitHub: [bkpecho](https://github.com/bkpecho)
  - Twitter: [@bkpecho](https://twitter.com/bkpecho)
  - LinkedIn: [in/bkpecho](https://www.linkedin.com/in/bkpecho/)
  - Email: pechobk@gmail.com
  - Portfolio: [bkpecho.tech](https://bkpecho.tech/)

Thank you for visiting the repository and checking out A Note to Remember! 🌻
