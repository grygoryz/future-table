import React from "react";
import c from "./Header.module.scss";
import Button from "../common/Button/Button";

type Props = {
    disabled: boolean
    onClick: () => void
}

const Header: React.FC<Props> = ({disabled, onClick}) => {

    return (
        <div className={c.container}>
            <Button onClick={onClick} disabled={disabled} title="Add" />
        </div>
    );
};

export default Header;
