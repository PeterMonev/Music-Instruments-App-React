import { useState } from 'react';
import { createOffer } from '../../services/instrumentServices';

import '../Create/Create.css';

export const Create = () => {
    const [formData , setFormData ] = useState({
        title: '',
        category: 'Guitars',
        address: '',
        imageUrl: '',
        price: 0,
        year: 0,
        description: '',
    });

    function onChange (event)  {
       
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    async function onSubmit(event){
        event.preventDefault();
   
        try {
             await createOffer(formData);
         
        } catch (error) {
            console.log(error);
        }

    }  


    return (
    <section className="create-section">
     <div className="create-container">

        <form onSubmit={onSubmit}>
        
            <h1>Create Game</h1>
            
            <label className="create-label" htmlFor="title">Title:</label>
            <input onChange={onChange} value={formData.title} className="create-input-field" type="text" name="title" placeholder="Instrument title..." />

            <label className="create-label"  htmlFor="category" name="category">Category:
            <select name="category" className="create-select-field" value={formData.category} onChange={onChange}>
             <option value="guitars">Guitars</option>
             <option value="drums">Drums</option>
             <option value="keyboards">Keyboards</option>
             <option value="brass">Brass</option>
            </select>
            </label>

            <label className="create-label" htmlFor="address">Address:</label>
            <input onChange={onChange} value={formData.address} className="create-input-field" type="text" name="address" placeholder="Sofia, ul.Vasil Levski 1" />

            <label className="create-label" htmlFor="imageUrl">ImageUrl:</label>
            <input onChange={onChange} value={formData.imageUrl} className="create-input-field" type="text" name="imageUrl" placeholder="http://someUrl.com" />

            <label className="create-label" htmlFor="price">Price:</label>
            <input onChange={onChange} value={formData.price} className="create-input-field" type="number" name="price" placeholder="0" />

            <label className="create-label" htmlFor="year">Year:</label>
            <input onChange={onChange} value={formData.year} className="create-input-field" type="number" name="year" placeholder="1992" />

            <label className="create-label" htmlFor="description" >Description:</label>
            <textarea name="description" placeholder="Very nice look and good codition..." onChange={onChange} value={formData.description} />

            <input className="create-submit " type="submit" value="Create Offer"/>
        
        </form>
     </div>
    </section>
    )
}