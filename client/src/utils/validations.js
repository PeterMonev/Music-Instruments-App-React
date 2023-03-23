
export const inputValidator = (userData, tagName, setErros) => {
     
    if(userData[tagName].length < 4){
       setErros(state => ({...state, [tagName]: `${tagName} should be 4 charaters long`}));
    } else {
       setErros(state => ({...state, [tagName]: null}))
    };
    
};