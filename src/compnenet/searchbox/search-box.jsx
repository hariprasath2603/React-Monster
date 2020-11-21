import React from 'react';
import '../searchbox/search-box.css';

const SearchBox = ({searchMonster}) => {
    return ( 
            <input className="searchBox" type='search' placeholder="Search Monster" onChange={searchMonster}></input>
     );
}
 
export default SearchBox;