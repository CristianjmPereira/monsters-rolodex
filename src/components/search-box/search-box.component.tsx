import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxInterface = {
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void, 
    placeholder?: string, 
    className: string
}

const SearchBox = ({ onChangeHandler, placeholder, className }: SearchBoxInterface) => {
    return (
        <div>
            <input
                className={`search-box ${className}`}
                type="search"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default SearchBox;
