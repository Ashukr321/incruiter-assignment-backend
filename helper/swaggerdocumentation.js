import envConfig from "../config/envConfig.js";
import userDocsRoutes from "../routes/user.doc.js";
const swaggerdocumentation = {
  openapi: '3.0.0',
  info: {
    title: "Authentication API Documentation",
    description: "Complete API documentation for the Authentication System",
    version: "1.0.0",
    contact: {
      name: "API Support",
      email: "support@example.com"
    }
  },

  servers: [
    {
      url: "http://localhost:8080/api/v1",
      description: "Local Development Server"
    },
    {
      url: `${envConfig.production_url}/api/v1`,
      description: "Production Server"
    }
  ],
  //  create the tags 
  tags: [
    {
      name: "User",
      description: "User authentication and management endpoints"
    }
  ],
  paths: {
    ...userDocsRoutes
  }
}

export default swaggerdocumentation