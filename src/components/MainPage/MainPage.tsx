import React from "react";
import c from "./MainPage.module.scss";
import Table from "../Table/Table";
import {TableData} from "../../types/types";

type Props = {
    data: TableData
}

const MainPage: React.FC<Props> = ({data}) => {
    return (
        <div className={c.container}>
            MainPage
            <Table data={data} />
        </div>
    );
};

export default MainPage;
