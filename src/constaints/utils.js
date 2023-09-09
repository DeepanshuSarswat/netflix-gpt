export const validateForm = (email, password) => {

    const checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!checkEmail) return 'Your email is Invalid';
    if(!checkPassword) return 'Your password is Invalid';

    return null;
}