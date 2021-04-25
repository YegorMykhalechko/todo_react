import React from 'react'

const SearchPannel = () => {
    const typeSearch = 'Start Search'
    const searchStyle = {
      fontSize: '20px',
    }
    return (
      <input style ={searchStyle} placeholder={typeSearch}></input>
    );
  };

export default SearchPannel;