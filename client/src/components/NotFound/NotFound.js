import { Link } from 'react-router-dom';

import '../NotFound/NotFound.css';

export const NotFound = () => {
    return (
        <section className='not-found'>
        <div className='not-found-home' >
            <p>Sorry, page is not found go to </p>
            <Link to={'/'}>Home</Link>
        </div>
        </section>
    );
};