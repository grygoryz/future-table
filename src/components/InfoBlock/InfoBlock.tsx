import React from "react";
import c from "./InfoBlock.module.scss";
import {TableItem} from "../../types/types";
import {animated} from "react-spring";
import {useScaleAnimation} from "../../hooks/animation-hooks";

type Props = {
    item: TableItem
}

const InfoBlock: React.FC<Props> = ({item}) => {
    const zoomIn = useScaleAnimation(0.7, 1);

    return (
        <animated.div style={zoomIn} className={c.container}>
            <div>Chosen user <b>{item.firstName}</b></div>
            <div className={c.description}>Description:<textarea value={item.description} readOnly={true}/></div>
            {item.address && <>
                <div>Address: <b>{item.address.streetAddress}</b></div>
                <div>City: <b>{item.address.city}</b></div>
                <div>State: <b>{item.address.state}</b></div>
                <div>Index: <b>{item.address.zip}</b></div>
            </>}
        </animated.div>
    );
};

export default InfoBlock;
