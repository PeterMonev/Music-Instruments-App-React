import '../Pagination/Pagination.css';

export const Pagination = ({changePageHandler, page, instrumentsCount}) => {
    const currentPage = Number(page);
    const pagesCount = Math.ceil(instrumentsCount / Number(6)) || 1;
    
    const paginateHandler = (event) => {
        event.preventDefault();
        changePageHandler(event.target.value)
    }

   return(
    <section className="pagination-wrap">
    <ul>
        <li><button onClick={paginateHandler} value={1}>{'<<'}</button></li>
        <li><button onClick={paginateHandler} value={currentPage !== 1 ? currentPage - 1 : 1}>{'<'}</button></li>
        {currentPage !== 1 &&
            <>
                <li><button className="unclickable">{currentPage - 1}</button></li>
            </>
        }

        <li><button className="active">{currentPage}</button></li>

        {pagesCount !== currentPage &&
            <>
                <li><button className="unclickable">{currentPage + 1}</button></li>
            </>
        }
        <li><button onClick={paginateHandler} value={currentPage !== pagesCount ? currentPage + 1 : currentPage}> {'>'} </button></li>
        <li><button onClick={paginateHandler} value={pagesCount}> {'>>'}</button></li>
    </ul>
</section>
   );
};