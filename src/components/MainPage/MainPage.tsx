import React from "react";
import c from "./MainPage.module.scss";
import Table from "../Table/Table";
import {TableData} from "../../types/types";
import FilterForm, {FilterFormValues} from "../FilterForm/FilterForm";

type Props = {
    data: TableData
    onSubmit: (formData: FilterFormValues) => void
}

const MainPage: React.FC<Props> = ({data, onSubmit}) => {
    return (
        <div className={c.container}>
            <FilterForm onSubmit={onSubmit}/>
            <Table data={data} />
        </div>
    );
};

export default MainPage;
