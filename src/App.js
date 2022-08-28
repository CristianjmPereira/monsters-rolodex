import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(setMonsters);
    }, []);

    useEffect(() => {
        setFilteredMonsters(monsters.filter(({ name }) => name.toLocaleLowerCase().includes(searchField)))
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const value = event.target.value.toLocaleLowerCase();
        setSearchField(value);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder={"Search Monsters"}
                className={"monsters-search-box"}
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
