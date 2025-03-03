import { config } from 'dotenv'
// load the env variable in to process.env
config();

// create the env object and export and use it 
const envConfig = {
  port: process.env.PORT,
  mongoUri: process.env.MONGOURI,
  dbName: process.env.DBNAME
}

export default envConfig;