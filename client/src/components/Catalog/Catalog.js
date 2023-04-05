import { useEffect, useState } from "react";
import { getAll } from "../../services/instrumentServices";

import "../Catalog/Catalog.css";
import { OffersList } from "./OffersList/OffersList";
import { Search } from "../Search/Search";
import { Pagination } from "../Pagination/Pagination";

const images = {
  firstImg: "/images/GuitarsCatalogPic.jpg",
  secondImg: "/images/DrumsCatalogPic.jpg",
  thirdImg: "/images/KeyboardsCatalogaPic.jpg",
  fourImg: "/images/BrassCatalogPic.jpg",
};

export const Catalog = () => {
  const [offers, setOffers] = useState([]);
  const [searchData, setSearchData] = useState({});
  const [page, setPage] = useState(1);
  const [instrumentsCount, setInstrumentsCount] = useState(1);

  useEffect(() => {
    (async () => {
      let query = { limit: 6, page, ...searchData }
      const data = await getAll(query);
      setOffers(data.instruments);
      setInstrumentsCount(data.count);
    })();
  }, [searchData, page]);

  function searchHandler(newSearchData) {
    setSearchData(newSearchData);
  };

  function changePageHandler(newPage) {
     setPage(newPage);
  };

  return (
    <>
      <section className="catalog-image-section">
        <img src={images.firstImg} alt="guitar" />
        <img src={images.secondImg} alt="drums" />
        <img src={images.thirdImg} alt="keyboards" />
        <img src={images.fourImg} alt="brass" />
      </section>

      <section className="catalog-section">

        <Search searchHandler={searchHandler}/>

        <OffersList offers={offers} />

        <Pagination changePageHandler={changePageHandler} page={page} instrumentsCount={instrumentsCount}/>

      </section>
    </>
  );
};
