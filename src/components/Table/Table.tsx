import React from "react";
import c from "./Table.module.scss";
import {TableData} from "../../types/types";
import TableRow from "./TableRow/TableRow";

type Props = {
    data: TableData
}
// повторяются ли id в данных?
const Table: React.FC<Props> = ({data}) => {
    return (
        <div className={c.container}>
            <table className={c.table}>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                {data.map(item => <TableRow key={item.id} item={item}/>)}
            </table>
        </div>
    );
};

export default Table;
