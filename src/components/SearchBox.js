import React from "react";
const SearchBox=({searchField,searchChange})=>{
	return (
	   <div className="search_box">
	       <input
	          className="search" 
	          type="search" 
	          placeholder="search robots"
	          onChange={searchChange}
	        />
	      </div>
		)
}
export default SearchBox