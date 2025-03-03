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
import cookiesParser from 'cookie-parser'
// import routes 
import userRoutes from './routes/userRoutes.js'



// create express server 
const app = express();
// connect to db
connectDb()

// cors middleware 
app.use(cors({
  // origin: envConfig.origin,
  origin: "*"
}));



//  use middleware to parse url encoded data 
app.use(express.json({ limit: "10kb" }));

// security 
app.use(helmet())
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
})