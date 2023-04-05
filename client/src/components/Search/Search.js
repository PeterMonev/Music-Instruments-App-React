import { useState } from 'react';

import '../Search/Search.css';

export const Search = ({ searchHandler }) => {
    const [form, setForm] = useState({
        search: '',
        category: 'Select category'
    });

    function onSubmit(event){
        event.preventDefault();
        searchHandler(form);
    };

    function onChange(event){
        setForm(state => ({
            ...state,
            [event.target.name]: event.target.value
        }));
    };

    return (
        <section className='search-container'>
        <form className="search-form" onSubmit={onSubmit}>
            <input
                value={form.search}
                name="search"
                type="text"
                placeholder="Search"
                onChange={onChange}
            />
            
            <select
                className='search-select'
                value={form.category}
                name="category"
                placeholder="category"
                onChange={onChange}
            >   <option value="Select category">Select category</option>
                <option value="Guitars">Guitars</option>
                <option value="Drums">Drums</option>
                <option value="Keyboards">Keyboards</option>
                <option value="Brass">Brass</option>
            </select>

            <button className='search-button' type="submit">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            </button>
        </form>
        </section>
    )
}