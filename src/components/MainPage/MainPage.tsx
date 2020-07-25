import React from "react";
import c from "./MainPage.module.scss";
import Table from "../Table/Table";
import {SortConfig, TableData} from "../../types/types";
import FilterForm, {FilterFormValues} from "../FilterForm/FilterForm";

type Props = {
    data: TableData
    onSubmit: (formData: FilterFormValues) => void
    requestSort: (key: string) => void
    sortConfig: SortConfig | null
}

const MainPage: React.FC<Props> = ({data, onSubmit, requestSort, sortConfig}) => {
    return (
        <div className={c.container}>
            <FilterForm onSubmit={onSubmit}/>
            <Table data={data} requestSort={requestSort} sortConfig={sortConfig}/>
        </div>
    );
};

export default MainPage;
