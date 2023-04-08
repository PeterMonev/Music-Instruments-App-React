import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editOffer, getById } from '../../services/instrumentServices';
import { imageUrlValidator, inputValidator, positiveNumberValidator, selectOptionValidator, yearValidator } from '../../utils/validations';

import '../Edit/OfferEdit.css';

export const OfferEdit = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [disableButton, setDisableButton] = useState(false);
    const [formData , setFormData ] = useState({});
    const { id } = useParams();
    const [ disableButtonStyle, setDisableButtonStlye] = useState('.edit-submit-disable');

    useEffect(() => {
        (async () => {
          const data = await getById(id);
          setFormData(data);
        })();
      }, [id]);

    function onChange (event)  {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

      useEffect(() => {
        if(Object.values(errors).some(error => error !== null)){
            setDisableButton(true);
            setDisableButtonStlye('edit-submit-disable')

        } else {
             setDisableButton(false);
             setDisableButtonStlye('edit-submit-enable')
        }
      }, [errors]); 

    // Validations
    function lengthValidation(event){
      const tagName = event.target.name;

      if(tagName === 'title'){
          inputValidator(formData, tagName, 3, setErrors, 30);
      } else if (tagName === 'description'){
          inputValidator(formData, tagName, 10, setErrors, 300);
      } else if ( tagName === 'address' ){
          inputValidator(formData, tagName, 10, setErrors, 40);
      }
   };

     function selectOptionValidation(event){
          selectOptionValidator(formData, event.target.name, setErrors);
     };

     function imageUrlValidation(){
          imageUrlValidator(formData, setErrors);
     };

     function positiveNumberValidation(){
          positiveNumberValidator(formData, setErrors);
     };
      
     function yearValidation(){
          yearValidator(formData, setErrors);
     };

     // OnSubmit Edit
    async function onSubmit(event){
        event.preventDefault();

        try {
            await editOffer(formData._id, formData);
            navigate(`/catalog/${formData._id}`);
        } catch (error) {
            console.log(error);
        };
    }; 
  
    return (
        <section className="create-section">
         <div className="create-container">
    
            <form onSubmit={onSubmit}>
            
                <h1>Edit Offer: </h1>
                
                <label className="create-label" htmlFor="title">Title:</label>
                <input onChange={onChange} value={formData.title} onBlur={lengthValidation} className="create-input-field" type="text" name="title" placeholder="Instrument title..." />
                {errors.title && <p className="p-create-error" >{errors.title}</p>}
    
                <label className="create-label"  htmlFor="category" name="category">Category:
                <select name="category" className="create-select-field" value={formData.category} onChange={onChange} onBlur={selectOptionValidation} >
                 <option value="Select category">Select category</option>
                 <option value="Guitars">Guitars</option>
                 <option value="Drums">Drums</option>
                 <option value="Keyboards">Keyboards</option>
                 <option value="Brass">Brass</option>
                </select>
                </label>
                {errors.category && <p className="p-create-error" >{errors.category}</p>}
    
                <label className="create-label" htmlFor="address">Address:</label>
                <input onChange={onChange} value={formData.address} onBlur={lengthValidation} className="create-input-field" type="text" name="address" placeholder="Sofia, ul.Vasil Levski 1" />
                {errors.address && <p className="p-create-error">{errors.address}</p>}
    
                <label className="create-label" htmlFor="imageUrl">ImageUrl:</label>
                <input onChange={onChange} value={formData.imageUrl} onBlur={imageUrlValidation} className="create-input-field" type="text" name="imageUrl" placeholder="http://someUrl.com" />
                {errors.imageUrl && <p className="p-create-error">{errors.imageUrl}</p>}
    
                <label className="create-label" htmlFor="price">Price:</label>
                <input onChange={onChange} value={formData.price} onBlur={positiveNumberValidation} className="create-input-field" type="number" name="price" placeholder="121.00" />
                {errors.price && <p className="p-create-error">{errors.price}</p>}
    
                <label className="create-label" htmlFor="year">Year:</label>
                <input onChange={onChange} value={formData.year} onBlur={yearValidation} className="create-input-field" type="number" name="year" placeholder="1992" />
                {errors.year && <p className="p-create-error">{errors.year}</p>}
    
                <label className="create-label" htmlFor="description" >Description:</label>
                <textarea name="description" placeholder="Very nice look and good codition..." onChange={onChange} value={formData.description} onBlur={lengthValidation} />
                {errors.description && <p className="p-create-error">{errors.description}</p>}
     
                <input disabled={ disableButton } className={disableButtonStyle} type="submit" value="Edit Offer"/>
            
            </form>
         </div>
        </section>
        )
}