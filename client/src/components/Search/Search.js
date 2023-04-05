

import '../Search/Search.css';

export const Search = () => {


    return (
        <section className='search-container'>
        <form className="search-form" >
            <input
              
                name="search"
                type="text"
                placeholder="Search"
            
            />
            
            <select
                className='search-select'
          
                name="criteria"
                placeholder="Criteria"
             
            >
                <option value="Guitar">Guitar</option>
                <option value="Drums">Drums</option>
                <option value="Keyboards">Keyboards</option>
                <option value="Brass">Brass</option>
            </select>

            <button className='search-button' type="submit">
                <i className="fas fa-paper-plane" />
            </button>
        </form>
        </section>
    )
}