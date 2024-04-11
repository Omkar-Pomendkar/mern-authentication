// Create cutomer Errors
export const errorHandler = (statusCode, message) => {
    // creating a javascript Constructor
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}