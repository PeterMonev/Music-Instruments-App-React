import '../Create/Create.css'

export const Create = () => {
    return (
    <section className="create-section">
     <div className="create-container">

        <form id="create" >
        
            <h1>Create Game</h1>
            
            <label className="create-label" htmlFor="title">Title:</label>
            <input className="create-input-field" type="text" name="title" placeholder="Instrument title..." />

            <label className="create-label" htmlFor="categpry">Category:</label>
             <select className="create-input-field"  >
              <option value="Option 1">Guitars</option>
              <option value="Option 2">Drums</option>
              <option value="Option 3">Keyboards</option>
              <option value="Option 3">Brass</option>
             </select>

            <label className="create-label" htmlFor="address">Address:</label>
            <input className="create-input-field" type="text" name="address" placeholder="Sofia, ul.Vasil Levski 1" />

            <label className="create-label" htmlFor="imageUrl">Image:</label>
            <input className="create-input-field" type="text" name="imageUrl" placeholder="http://someUrl.com" />

            <label className="create-label" htmlFor="price">Price:</label>
            <input className="create-input-field" type="number" name="price" placeholder="0" />

            <label className="create-label" htmlFor="year">Year:</label>
            <input className="create-input-field" type="number" name="year" placeholder="1992" />

            <label className="create-label" htmlFor="description" >Description:</label>
            <textarea name="description" placeholder="Very good nice look and good codition..." defaultValue={""} />

            <input className="create-submit " type="submit" value="Create Offer"/>
        
        </form>
     </div>
    </section>
    )
}