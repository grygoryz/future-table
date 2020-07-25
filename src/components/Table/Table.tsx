import React, { useState } from "react";
import c from "./Table.module.scss";
import cn from "classnames"
import {PaginationConfig, SortConfig, TableData} from "../../types/types";
import TableRow from "./TableRow/TableRow";
import {tableHeaders} from "../../reducers/table-reducer";

type Props = {
    data: TableData
    requestSort: (key: string) => void
    sortConfig: SortConfig | null
    paginationConfig: PaginationConfig
    turnPage: (isNext: boolean) => void
}

const Table: React.FC<Props> = ({data, requestSort, sortConfig, paginationConfig, turnPage}) => {
    const {startIndex, pageSize} = paginationConfig;
    const endIndex = startIndex + pageSize;

    const totalCount = data.length;


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
                {data.slice(startIndex, endIndex + 1).map((item, idx) => <TableRow key={idx} item={item}/>)}
                </tbody>
            </table>
            <button onClick={() => turnPage(false)} disabled={startIndex - pageSize <= 0}>prev</button>
            <button onClick={() => turnPage(true)} disabled={startIndex + pageSize > totalCount}>next</button>
        </div>
    );
};

export default Table;
