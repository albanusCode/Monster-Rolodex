import CardList from "./components/card-list/card-list";
import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box";
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredmonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

const onSearchChange = (event) => {
  const searchFieldString = event.target.value.toLowerCase();
  setSearchField(searchFieldString);
};

return (
  <div className="App">
    <h1 className="app-title">Monsters Rolodex</h1>
    <br/>
    <SearchBox 
    onChangeHandler={onSearchChange} 
    placeholder='search monsters' 
    className='search-box'
    />
    <CardList monsters={filteredmonsters}/>
  </div>
);
}

export default App;