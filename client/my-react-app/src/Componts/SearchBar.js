import React from "react";
import "../css/searchBar.css"




const SearchBar = () =>{





    return(
            <div  className="SearchBox-Container">
                <div className="searchBox">
                    <p>Location</p>
                    <input  type='text'  placeholder="Enter City, Airport, or Address" />
                </div>
                <div className="searchBox">
                <p>PickUp Date</p>
                    <input  type='date'  placeholder="Enter City, Airport, or Address" />
                </div>
                <div   className="searchBo3">
                <p>Car Type</p>
                <select
                    id="car-type"
                    value={null}
                    onChange={(e) => null}
                >
                    <option value="compact">Compact</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="luxury">Luxury</option>
                </select>

                <button id="search-button" onClick={null}>Search</button>
                            </div>
                
            </div>
  
    );
}
export default SearchBar