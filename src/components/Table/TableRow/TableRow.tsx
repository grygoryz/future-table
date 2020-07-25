import React from "react";
import c from "./TableRow.module.scss";
import cn from "classnames"
import {TableItem} from "../../../types/types";

type Props = {
    item: TableItem
    onClick: () => void
    selected: boolean
}

const TableRow: React.FC<Props> = ({item, onClick, selected}) => {
    return (
        <tr className={cn(c.row, {[c.selected]: selected})} onClick={onClick}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    );
};

export default TableRow;
