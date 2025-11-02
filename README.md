<div align="center">

# 📱 Samsung India Clone

### A Modern Full-Stack E-Commerce Web Application

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Demo](#) · [Report Bug](https://github.com/princekotharii/SamsungIndia-Clone/issues) · [Request Feature](https://github.com/princekotharii/SamsungIndia-Clone/issues)

</div>

---

## 📖 About The Project

A pixel-perfect, production-ready clone of the Samsung India e-commerce platform, showcasing modern web development practices and a fully functional full-stack architecture. This project demonstrates expertise in creating scalable, secure, and responsive web applications.

### ✨ Key Highlights

- 🎯 **Pixel-Perfect Design** - Meticulously crafted UI matching Samsung's design language
- 🔐 **Enterprise-Grade Security** - JWT authentication with bcrypt password encryption
- ⚡ **Lightning Fast** - Optimized with Vite for blazing-fast load times
- 📱 **Fully Responsive** - Seamless experience across all device sizes
- 🏗️ **Scalable Architecture** - Clean, maintainable code structure
- 🔄 **RESTful API** - Well-structured backend with proper routing

---

## 🛠️ Technology Stack

<table>
<tr>
<td valign="top" width="50%">

### Frontend
- ⚛️ **React 19.1.1** - Latest React with concurrent features
- ⚡ **Vite 7.1.6** - Next-generation frontend tooling
- 🎨 **Tailwind CSS 4.1.13** - Modern utility-first CSS
- 🔀 **React Router DOM 7.9.5** - Declarative routing
- 📡 **Axios** - Promise-based HTTP client
- 🎭 **React Icons** - Comprehensive icon library

</td>
<td valign="top" width="50%">

### Backend
- 🟢 **Node.js & Express 5.1.0** - Robust server framework
- 🍃 **MongoDB & Mongoose 8.19.2** - NoSQL database
- 🔑 **JWT** - Secure token-based authentication
- 🔒 **bcryptjs** - Industrial-strength password hashing
- 🍪 **Cookie Parser** - Secure cookie management
- 🌐 **CORS** - Cross-origin resource sharing

</td>
</tr>
</table>

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

```bash
node -v  # v14.0.0 or higher
npm -v   # v6.0.0 or higher
mongod --version  # MongoDB 4.0 or higher
```

### ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/princekotharii/SamsungIndia-Clone.git
   cd SamsungIndia-Clone
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create `.env` file in the backend directory:
   ```env
   PORT= [Your backend port number eg: 3000 , 5000 , 8000]
   MONGODB_URI= [MongoDB Connection URL]
   JWT_SECRET= [your_super_secret_jwt_key_here]
   JWT_EXPIRE=7d
   NODE_ENV=development
   COOKIE_EXPIRE=7
   ```

   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

   Create `.env` file in the frontend directory (if needed):
   ```env
   VITE_API_URL=http://localhost:(2000,3000 ,5000)-Yours Backend Port Number
   ```

   Start the frontend server:
   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

---

## 📂 Project Structure

```
SamsungIndia-Clone/
│
├── 📁 backend/
│   ├── 📁 config/          # Database & environment configuration
│   ├── 📁 controllers/     # Request handlers
│   ├── 📁 models/          # Database schemas
│   ├── 📁 routes/          # API routes
│   ├── 📁 middleware/      # Authentication & error handling
│   ├── 📄 index.js         # Server entry point
│   └── 📄 package.json
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/  # Reusable components
│   │   ├── 📁 pages/       # Page components
│   │   ├── 📁 context/     # React context
│   │   ├── 📁 utils/       # Helper functions
│   │   ├── 📁 assets/      # Images & static files
│   │   └── 📄 App.jsx      # Root component
│   ├── 📄 index.html
│   ├── 📄 vite.config.js
│   └── 📄 package.json
│
└── 📄 README.md
```

---

## 🎯 Features

<table>
<tr>
<td>

### User Features
- ✅ User registration & login
- 🔐 Secure authentication
- 👤 User profile management
- 🛒 Shopping cart functionality
- 💳 Product browsing & filtering
- 📱 Mobile-responsive design

</td>
<td>

### Technical Features
- 🏗️ RESTful API architecture
- 🔒 JWT-based authorization
- 🍪 HTTP-only cookies
- 🎨 Modern UI/UX design
- ⚡ Optimized performance
- 🔄 Real-time data updates

</td>
</tr>
</table>

---

## 📜 Available Scripts

### Frontend Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

### Backend Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with nodemon |
| `npm start` | Start production server |
| `npm test` | Run test suite |

---

## 🔒 Environment Variables

### Backend (.env)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/samsung-india

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d

# Cookie Configuration
COOKIE_EXPIRE=7
```

### Frontend (.env)

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the ISC License. See `LICENSE` for more information.

---

## 👨‍💻 Developer

<div align="center">

### Prince Kothari

[![GitHub](https://img.shields.io/badge/GitHub-princekotharii-181717?style=for-the-badge&logo=github)](https://github.com/princekotharii)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/princekotharii)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF7139?style=for-the-badge&logo=firefox)](https://princekotharii.github.io)

</div>

---

## ⚠️ Legal Disclaimer

This project is a clone created purely for **educational and portfolio purposes**. It is not affiliated with, endorsed by, or connected to Samsung Electronics Co., Ltd. All trademarks, logos, and brand names are the property of their respective owners.

---

<div align="center">

### 🌟 Show Your Support

If you found this project helpful or interesting, please consider giving it a ⭐!

**Made with ❤️ and ☕ by [Prince Kothari](https://github.com/princekotharii)**

---

© 2025 Samsung India Clone. All Rights Reserved.

</div>
