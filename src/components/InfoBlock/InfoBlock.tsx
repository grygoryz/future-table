import React from "react";
import c from "./InfoBlock.module.scss";
import {TableItem} from "../../types/types";

type Props = {
    item: TableItem
}

const InfoBlock: React.FC<Props> = ({item}) => {
    return (
        <div className={c.container}>
            <div>Chosen user <b>{item.firstName}</b></div>
            <div className={c.description}>Description:<textarea readOnly={true}>{item.description}</textarea></div>
            {item.address && <>
                <div>Address: <b>{item.address.streetAddress}</b></div>
                <div>City: <b>{item.address.city}</b></div>
                <div>State: <b>{item.address.state}</b></div>
                <div>Index: <b>{item.address.zip}</b></div>
            </>}
        </div>
    );
};

export default InfoBlock;
