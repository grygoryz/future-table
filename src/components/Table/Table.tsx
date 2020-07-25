import React, {useState} from "react";
import c from "./Table.module.scss";
import cn from "classnames"
import {PaginationConfig, SortConfig, TableData, TableItem} from "../../types/types";
import TableRow from "./TableRow/TableRow";
import {tableHeaders} from "../../reducers/table-reducer";

type Props = {
    data: TableData
    requestSort: (key: string) => void
    sortConfig: SortConfig | null
    paginationConfig: PaginationConfig
    turnPage: (isNext: boolean) => void
    selectItem: (item: TableItem) => void
    selectedItem: TableItem | null
}

const Table: React.FC<Props> = ({data, requestSort, sortConfig, paginationConfig, turnPage, selectItem, selectedItem}) => {
    const {startIndex, pageSize} = paginationConfig;
    const endIndex = startIndex + pageSize;

    const totalCount = data.length;


    const getClassName = (key: string) => {
        if (!sortConfig) return;
        return sortConfig.key === key ? c[sortConfig.direction] : undefined;
    };

    return (
        <div className={c.container}>
            <div className={c.control}>
                <div className={c.info}>{startIndex}-{endIndex} of {totalCount}</div>
                <button className={cn(c.button, c.prevButton)} onClick={() => turnPage(false)}
                        disabled={startIndex - pageSize < 0}><span/></button>
                <button className={cn(c.button, c.nextButton)} onClick={() => turnPage(true)}
                        disabled={startIndex + pageSize > totalCount}><span/></button>
            </div>
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
                {data.slice(startIndex, endIndex + 1)
                    .map((item, idx) => <TableRow
                        onClick={() => selectItem(item)}
                        key={idx}
                        selected={selectedItem === item}
                        item={item}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
