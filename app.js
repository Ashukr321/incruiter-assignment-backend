import express from 'express';
import connectDb from './config/connectDb.js';
import envConfig from './config/envConfig.js';
import cors from 'cors'

// security configuration
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
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


// listen server 
const port = envConfig.port || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})