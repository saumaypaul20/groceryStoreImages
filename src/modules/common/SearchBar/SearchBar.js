import React, {useEffect} from 'react';
import {Searchbar} from 'react-native-paper';

const SearchBar = ({setSearchTerm}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(()=>{
    setSearchTerm(searchQuery)
  },[searchQuery])

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      icon="magnify"
    />
  );
};

export default SearchBar;
