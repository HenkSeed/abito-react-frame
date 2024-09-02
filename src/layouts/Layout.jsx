import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";

export const Layout = () => {
  const [searchText, setSearchText] = useState(""); // Это хук

  const [products, setProducts] = useState([]); // Это второй хук

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    setProducts(
      cardArray.filter(
        (p) => p.title.includes(searchText) || p.price.includes(searchText)
      )
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" value={searchText} onChange={handleSearch} />
              <button
                className="btn btn-primary search-btn"
                onClick={handleSearchArray}
              >
                <img
                  src="/image/search.svg"
                  alt="Search Icon"
                  className="search-box__icon"
                />
                <span className="search-box__text">Найти</span>
              </button>
            </div>
          </div>
        </section>

        <Outlet context={{ products: products }} />
      </main>
    </>
  );
};
