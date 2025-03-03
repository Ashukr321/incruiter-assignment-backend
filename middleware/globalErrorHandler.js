
// create the global error handler 
const globalErrorHandler = async (error, req, res, next) => {
  // create the error object 
  const err = new Error();
  // set the message 
  err.message = error.message || "invalid server error";
  err.status = error.status || 500;
  // send the error message
  res.send(err);
}

// export globalErrorHandler function
export default globalErrorHandler;