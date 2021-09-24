import React, { useState } from "react";
// import data from "./Data"
import "./Searchbar.css";
// import FiSearch from "@material-ui/icons/Search";
// import FiSearch from '@mui/icons-material/Search';
// import ImCross from "@material-ui/icons/Close";
// import ImCross from '@mui/icons-material/CancelTwoTone';
import {FiSearch} from "react-icons/fi"
import {ImCross} from "react-icons/im"

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="FiSearch">
          {filteredData.length === 0 ? (
            <FiSearch />
          ) : (
            <ImCross id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
