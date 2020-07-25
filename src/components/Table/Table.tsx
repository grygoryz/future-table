import React from "react";
import c from "./Table.module.scss";
import cn from "classnames"
import {SortConfig, TableData} from "../../types/types";
import TableRow from "./TableRow/TableRow";
import {tableHeaders} from "../../reducers/table-reducer";

type Props = {
    data: TableData
    requestSort: (key: string) => void
    sortConfig: SortConfig | null
}

const Table: React.FC<Props> = ({data, requestSort, sortConfig}) => {
    const getClassName = (key: string) => {
        if (!sortConfig) return;
        return sortConfig.key === key ? c[sortConfig.direction] : undefined;
    };

    return (
        <div className={c.container}>
            <table className={c.table}>
                <thead>
                <tr>
                    {tableHeaders.map((h, idx) => <th
                        className={cn(c.tableHeader, getClassName(h))}
                        onClick={() => requestSort(h)}
                        key={idx}
                    >{h}</th>)}
                </tr>
                </thead>
                <tbody>
                {data.map((item, idx) => <TableRow key={idx} item={item}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
