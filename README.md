# 📱 Chatting MERN App

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), optimized for both desktop and mobile devices.

![Chat App Screenshot](https://your-screenshot-url-here.jpg)

## ✨ Features

- **Real-time messaging** powered by Socket.io
- **User authentication** with JWT
- **Image sharing** via Cloudinary integration
- **Mobile-first responsive design**
- **Theme customization** with multiple options
- **Profile management** including profile picture uploads

## 💻 Technologies Used

### Frontend
- React.js
- TailwindCSS
- DaisyUI
- Socket.io Client
- Zustand for state management
- React Router DOM
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.io for real-time communication
- JWT for authentication
- Cloudinary for image storage
- bcrypt for password hashing

## 📲 Mobile Optimized

This application is fully responsive and optimized for mobile devices:
- Adaptive layout that works on various screen sizes
- Touch-friendly interface elements
- Optimized image handling for mobile data connections
- Fast loading times for mobile users

## 🚀 Live Demo

Check out the live version of the app deployed on Render:
[Chatting MERN App](https://your-deployment-url-here.onrender.com)

## 🛠️ Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/Kishan-95/Chatting-mern-app.git
cd Chatting-mern-app
```

### Environment Variables
Create a `.env` file in the backend directory with the following variables:
```
PORT=5001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

### Install dependencies and run
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Run the development server (from root directory)
npm run dev
```

## 📸 Screenshots

### Mobile View
![Mobile Screenshot](https://your-mobile-screenshot-url-here.jpg)

### Desktop View
![Desktop Screenshot](https://your-desktop-screenshot-url-here.jpg)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Kishan-95/Chatting-mern-app/issues).

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 🙏 Acknowledgements

- GitHub Copilot for deployment assistance
- Socket.io for real-time functionality
- Cloudinary for image hosting