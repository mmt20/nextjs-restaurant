import styles from "./search.module.css";

const { marginSearch, searchContainer, title, searchBtn, searchInput } = styles;

const Search = () => {
  return (
    <div className={`${marginSearch} ${searchContainer}`}>
      <div className="container w-100  d-flex flex-column justify-content-center align-items-center">
        <h1 className={title}>Looking for your resturant</h1>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <input className={`${searchInput} w-75`} type="text" placeholder="search" />
          <button className={searchBtn}>search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
