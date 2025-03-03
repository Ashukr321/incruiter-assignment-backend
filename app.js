import express from 'express';
import connectDb from './config/connectDb.js';
import envConfig from './config/envConfig.js';
import morgan from 'morgan'
import fs from 'fs';
import globalErrorHandler from './middleware/globalErrorHandler.js'
// security configuration
import cors from 'cors'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import swaggerDoc from 'swagger-ui-express';
import swaggerDocumentation from './helper/swaggerdocumentation.js'
import ejs from 'ejs'
import path from 'path'
import cookiesParser from 'cookie-parser'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import routes 
import userRoutes from './routes/userRoutes.js'

// Get current file path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// create express server 
const app = express();
// connect to db
connectDb()

// cors middleware 
app.use(cors({
  // origin: envConfig.origin,
  origin: "*"
}));

// set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

//  use middleware to parse url encoded data 
app.use(express.json({ limit: "10kb" }));

// security 
app.use(helmet({
  contentSecurityPolicy: false  // Disable CSP temporarily for development
}));
app.use(mongoSanitize());
app.use(cookiesParser());

//  swagger docuementaion 
app.use('/documentation', swaggerDoc.serve);
app.use('/documentation', swaggerDoc.setup(swaggerDocumentation));

// log file 
if (envConfig.node_env == "development") {
  const logStream = fs.createWriteStream('./logs/access.log', { flags: 'a' });
  app.use(morgan('dev', { stream: logStream }));
}

// creates routes
const baseurl = "/api/v1"
// user routes 
app.use(`${baseurl}/user`, userRoutes);

//  globalErrorHandler  
app.use(globalErrorHandler);

// listen server 
const port = envConfig.port || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});