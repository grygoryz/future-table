import React from "react";
import c from "./SearchButton.module.scss";
import {ReactComponent as SearchButtonIcon} from "../../../assets/icons/search-icon.svg";

type Props = {
    type?: "button" | "submit" | "reset"
    onClick?: (...args: any[]) => void
}

const SearchButton: React.FC<Props> = ({onClick, type}) => {
    return <div className={c.container}>
        <button onClick={onClick} type={type}><SearchButtonIcon/></button>
    </div>;
};

export default SearchButton;
