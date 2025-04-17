# 📱 Chatting MERN App

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), optimized for both desktop and mobile devices.


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
https://chatting-mern-app-tz5p.onrender.com/

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
![Screenshot_2025-04-17-18-24-02-45_40deb401b9ffe8e1df2f1cc5ba480b12](https://github.com/user-attachments/assets/d446e9cc-5ba7-4638-8f6d-45df994c9525)
![Screenshot_2025-04-17-18-24-06-56_40deb401b9ffe8e1df2f1cc5ba480b12](https://github.com/user-attachments/assets/b32798a9-e117-4444-9919-2642d8720029)
![Screenshot_2025-04-17-18-24-17-88_40deb401b9ffe8e1df2f1cc5ba480b12](https://github.com/user-attachments/assets/c212d983-cf56-4078-9609-325a649e40ec)
![Screenshot_2025-04-17-18-24-27-01_40deb401b9ffe8e1df2f1cc5ba480b12](https://github.com/user-attachments/assets/577f8bd0-cca6-4eb1-98c1-cbb79db121d8)
![Screenshot_2025-04-17-18-24-29-25_40deb401b9ffe8e1df2f1cc5ba480b12](https://github.com/user-attachments/assets/3c96760f-3c3a-49b2-9560-78f24662b7f5)


### Desktop View
I dont have a desktop 😅

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Kishan-95/Chatting-mern-app/issues).

## 📝 License

This project is licensed under the MIT License.
Feel free to use, modify, and share it!


## 🙏 Acknowledgements

- GitHub Copilot for deployment assistance
- Socket.io for real-time functionality
- Cloudinary for image hosting
