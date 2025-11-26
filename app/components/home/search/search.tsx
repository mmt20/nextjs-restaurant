import styles from "./search.module.css";

const { marginSearch, searchContainer, title, searchBtn, searchInput } = styles;

const Search = () => {
  return (
    <div className={`${marginSearch} ${searchContainer}`}>
      <div className="container w-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className={title}>search for a resturant</h1>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <button className={searchBtn}>search</button>
          <input className={`${searchInput} w-75`} type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default Search;
