# User Authentication API

A robust and secure RESTful API for user authentication built with Node.js, Express, and MongoDB. This API provides endpoints for user registration, login, and logout with JWT-based authentication.

## 🚀 Features

- User registration with email and password
- JWT-based authentication with 1-hour token expiry
- Secure password hashing with bcrypt
- Input validation using Joi
- API documentation with Swagger UI
- Security features (Helmet, CORS, MongoDB Sanitization)
- Error handling middleware
- Logging system with Morgan
- MongoDB Atlas integration
- Production-ready configuration

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **Template Engine:** EJS
- **Authentication:** JWT (JSON Web Tokens)
- **API Documentation:** Swagger UI
- **Security:** Helmet, CORS, Express Mongo Sanitize
- **Validation:** Joi
- **Password Hashing:** bcryptjs
- **Logging:** Morgan
- **Deployment:** Render

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/incruiter-assignment-backend.git
cd incruiter-assignment-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=8080
MONGOURI=your_mongodb_atlas_connection_string
DBNAME="mydb"
NODE_ENV="development"
CLIENT_URL="localhost"
PRODUCTION_URL="https://incruiter-assignment-backend.onrender.com"
JWT_SECRETE_KEY="your_jwt_secret_key"
JWT_EXPIRE=1h
```

## 🚀 Running the Application

### Development Mode
```bash
npm start
```
This will start the server with nodemon for auto-reloading at `http://localhost:8080`

### Production Mode
```bash
NODE_ENV=production node app.js
```
The application is deployed at: `https://incruiter-assignment-backend.onrender.com`

## 📚 API Documentation

Once the server is running, you can access the Swagger UI documentation at:
- Local: `http://localhost:8080/documentation`
- Production: `https://incruiter-assignment-backend.onrender.com/documentation`

## 🔐 API Endpoints

### Authentication Endpoints

1. **Register User**
   - Method: `POST`
   - Endpoint: `/api/v1/user/register`
   - Description: Create a new user account
   - Base URL: 
     - Local: `http://localhost:8080`
     - Production: `https://incruiter-assignment-backend.onrender.com`

2. **Login User**
   - Method: `POST`
   - Endpoint: `/api/v1/user/login`
   - Description: Authenticate user and get JWT token (valid for 1 hour)

3. **Logout User**
   - Method: `GET`
   - Endpoint: `/api/v1/user/logout`
   - Description: Logout user and invalidate JWT token

## 📦 Dependencies

### Production Dependencies
- `bcryptjs`: ^3.0.2 - Password hashing
- `cookie-parser`: ^1.4.7 - Parse Cookie header
- `cors`: ^2.8.5 - Enable CORS
- `dotenv`: ^16.4.7 - Environment variables
- `ejs`: ^3.1.10 - Template engine
- `express`: ^4.21.2 - Web framework
- `express-mongo-sanitize`: ^2.2.0 - MongoDB query sanitization
- `helmet`: ^8.0.0 - Security headers
- `joi`: ^17.13.3 - Data validation
- `jsonwebtoken`: ^9.0.2 - JWT authentication
- `mongoose`: ^8.11.0 - MongoDB ODM
- `morgan`: ^1.10.0 - HTTP request logger
- `nodemon`: ^3.1.9 - Auto-reload during development
- `swagger-ui-express`: ^5.0.1 - API documentation

### Development Dependencies
- `@types/cookie-parser`: ^1.4.8
- `@types/cors`: ^2.8.17
- `@types/ejs`: ^3.1.5
- `@types/express`: ^5.0.0
- `@types/jsonwebtoken`: ^9.0.9
- `@types/swagger-ui-express`: ^4.1.8

## 🔒 Security Features

- JWT-based authentication with 1-hour expiry
- Password hashing with bcrypt
- CORS protection
- Helmet security headers
- MongoDB query sanitization
- Input validation
- Rate limiting (can be implemented)
- Environment-based configuration

## 🌐 Environment Configuration

The application supports two environments:

### Development
- Port: 8080
- Database: MongoDB Atlas
- Client URL: localhost
- JWT Expiry: 1 hour

### Production
- URL: https://incruiter-assignment-backend.onrender.com
- Database: MongoDB Atlas
- Client URL: Production URL
- JWT Expiry: 1 hour

## 📝 License

This project is licensed under the ISC License.

## 👥 Author

Ashutosh Kumar

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@example.com or create an issue in the repository. 