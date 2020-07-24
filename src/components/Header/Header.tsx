import React from "react";
import c from "./Header.module.scss";
import Button from "../common/Button/Button";
import {TableItem} from "../../types/types";

type Props = {
    disabled: boolean

}

const Header: React.FC<Props> = ({disabled}) => {

    return (
        <div className={c.container}>
            <Button disabled={disabled} title="Add" />
        </div>
    );
};

export default Header;
