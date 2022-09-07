import { ChangeEvent, useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { getData } from "./utils/data.utils";

export type Monster = {
    id: string;
    name: string;
    email: string;
}

const App = () => {
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);
    const [searchField, setSearchField] = useState<string>("");

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
            setMonsters(users);
            console.log(users);
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        setFilteredMonsters(monsters.filter(({ name }) => name.toLocaleLowerCase().includes(searchField)))
    }, [monsters, searchField]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>):void => {
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
