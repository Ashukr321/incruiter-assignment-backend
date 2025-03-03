import { config } from 'dotenv'
// load the env variable in to process.env
config();

// create the env object and export and use it 
const envConfig = {
  port: process.env.PORT,
  mongoUri: process.env.MONGOURI,
  dbName: process.env.DBNAME,
  node_env: process.env.NODE_ENV,
  client_url: process.env.CLIENT_URL,
  production_url: process.env.PRODUCTION_URL,
  jwt_secrete: process.env.JWT_SECRETE_KEY,
  jwt_expire: process.env.JWT_EXPIRE
}

export default envConfig;