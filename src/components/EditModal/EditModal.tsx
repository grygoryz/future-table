import React from "react";
import c from "./EditModal.module.scss";

const EditModal: React.FC = () => {

    return (
        <div className={c.container}>
            <div className={c.window}>
                <div className={c.title}>Create new item:</div>

            </div>
        </div>
    );
};

export default EditModal;
