export const emailValidator = (userData, setErrors) => {
    
}


export const inputValidator = (userData, tagName, setErrors) => {
     
    if(userData[tagName].length < 4){
       setErrors(state => ({...state, [tagName]: `${tagName} should be 4 charaters long`}));
    } else {
       setErrors(state => ({...state, [tagName]: null}))
    };
    
};

export const passwordMatch = (userData, setErrors) => {

    if(userData.password !== userData.repeatPassword){
        setErrors(state => ({...state, repeatPassword: `Password don't match`}));
    } else {
        setErrors(state => ({...state, repeatPassword: null}));
    }
}