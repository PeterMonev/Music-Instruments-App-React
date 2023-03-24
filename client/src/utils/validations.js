export const emailValidator = (userData, setErrors) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    if(!regex.test(String(userData.email).toLowerCase())){
        setErrors(state => ({...state, email: 'Incorrect! Email should be like this example: peter@gmail.com'}));
    } else {
        setErrors(state => ({...state, email: null}));
    }
};


export const inputValidator = (userData, tagName, setErrors) => {
     
    if(userData[tagName].length < 4){
       setErrors(state => ({...state, [tagName]: `${tagName} should be 4 charaters long`}));
    } else {
       setErrors(state => ({...state, [tagName]: null}))
    }
    
};

export const passwordMatch = (userData, setErrors) => {

    if(userData.password !== userData.repeatPassword){
        setErrors(state => ({...state, repeatPassword: `Password don't match`}));
    } else {
        setErrors(state => ({...state, repeatPassword: null}));
    }
};