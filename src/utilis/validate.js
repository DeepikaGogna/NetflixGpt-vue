export const checkLoginValidation = (email, password) => {
    const errors = {};
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmailValid) errors.email  = "Please enter a valid email address or phone number."
    if(!isPasswordValid) errors.password  = "Your password must contain between 4 and 60 characters."
    return errors;
}