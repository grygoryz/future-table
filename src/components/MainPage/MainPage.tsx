import React from "react";
import c from "./MainPage.module.scss";
import Table from "../Table/Table";
import {PaginationConfig, SortConfig, TableData, TableItem} from "../../types/types";
import FilterForm, {FilterFormValues} from "../FilterForm/FilterForm";
import InfoBlock from "../InfoBlock/InfoBlock";

type Props = {
    data: TableData
    onSubmit: (formData: FilterFormValues) => void
    requestSort: (key: string) => void
    sortConfig: SortConfig | null
    paginationConfig: PaginationConfig
    turnPage: (isNext: boolean) => void
    selectedItem: TableItem | null
    selectItem: (item: TableItem) => void
}

const MainPage: React.FC<Props> = ({data, onSubmit, requestSort, sortConfig,
                                       paginationConfig, turnPage, selectedItem, selectItem}) => {
    return (
        <div className={c.container}>
            <FilterForm onSubmit={onSubmit}/>
            <Table data={data}
                   requestSort={requestSort}
                   sortConfig={sortConfig}
                   paginationConfig={paginationConfig}
                   turnPage={turnPage}
                   selectItem={selectItem}
                   selectedItem={selectedItem}
            />
            {selectedItem && <InfoBlock item={selectedItem}/>}
        </div>
    );
};

export default MainPage;
