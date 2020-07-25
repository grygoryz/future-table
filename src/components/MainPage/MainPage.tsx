import React from "react";
import c from "./MainPage.module.scss";
import {TableItem} from "../../types/types";
import FilterForm, {FilterFormValues} from "../FilterForm/FilterForm";
import InfoBlock from "../InfoBlock/InfoBlock";
import TableContainer from "../../containers/TableContainer";

type Props = {
    onSubmit: (formData: FilterFormValues) => void
    selectedItem: TableItem | null
}

const MainPage: React.FC<Props> = ({onSubmit, selectedItem}) => {
    return (
        <div className={c.container}>
            <FilterForm onSubmit={onSubmit}/>
            <TableContainer/>
            {selectedItem && <InfoBlock item={selectedItem}/>}
        </div>
    );
};

export default MainPage;
