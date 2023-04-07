export const emailValidator = (userData, setErrors) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    if(!regex.test(String(userData.email).toLowerCase())){
        setErrors(state => ({...state, email: 'Incorrect! Email should be like this example: peter@gmail.com!'}));
    } else {
        setErrors(state => ({...state, email: null}));
    }
};

export const inputValidator = (userData, tagName,minLength, setErrors, maxLength) => {
     
    if( userData[tagName] === undefined || userData[tagName].trim().length < minLength || userData[tagName].length > maxLength ){
       setErrors(state => ({...state, [tagName]: `${tagName.charAt(0).toUpperCase() + tagName.slice(1)} should be between ${minLength} and ${maxLength} charaters long!`}));
    } else {
       setErrors(state => ({...state, [tagName]: null}))
    }
    
};

export const passwordMatch = (userData, setErrors) => {

    if(userData.password !== userData.repeatPassword){
        setErrors(state => ({...state, repeatPassword: `Password don't match`}));
    } else {
        setErrors(state => ({...state, repeatPassword: null}));
    };
};

export const selectOptionValidator = (formData, tagName, setErrors) =>{
    const validOptions = ['Guitars','Drums', 'Keyboards', 'Brass'];

    if(!validOptions.includes(formData[tagName])){
        setErrors(state => ({...state, [tagName]: `Select rigth category!`}));
    } else {
        setErrors(state => ({...state, [tagName]: null}));
    }; 
};

export const imageUrlValidator = (formData, setErrors) => {
    if(!formData.imageUrl.match(/https?:\/\//i)){
        setErrors(state => ({...state, imageUrl: 'Invalid image Url! Try example like this: https://www.example.com.'}))
    } else {
        setErrors(state => ({...state, imageUrl: null}));
    };
};

export const positiveNumberValidator = (formData, setErrors) => {
    if(!Number(formData.price) || formData.price <= 0 ){
        setErrors(state => ({...state, price: 'Price must be positive number!'}));
    } else {
        setErrors(state => ({...state, price: null}));
    };
};

export const yearValidator = (formData, setErrors) => {
    if(formData.year <= 1900 || formData.year >= 2024){
        setErrors(state => ({...state, year: 'Year must be between 1901 and 2023!'}));
    } else {
        setErrors(state => ({...state, year: null}));
    };
};
   