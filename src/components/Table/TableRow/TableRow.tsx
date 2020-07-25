import React from "react";
import c from "./TableRow.module.scss";
import {TableItem} from "../../../types/types";

type Props = {
    item: TableItem
    onClick: () => void
}

const TableRow: React.FC<Props> = ({item, onClick}) => {
    return (
        <tr onClick={onClick}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    );
};

export default TableRow;
