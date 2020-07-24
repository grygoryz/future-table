import React from "react";
import c from "./EditModal.module.scss";
import EditForm from "./EditForm/EditForm";
import {TableItem} from "../../types/types";

type Props = {
    closeModal: () => void
    onSubmit: (formData: TableItem) => void
}

const EditModal: React.FC<Props> = ({closeModal, onSubmit}) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.className === c.container) closeModal();
    };

    return (
        <div onClick={onClick} className={c.container}>
            <div className={c.window}>
                <div className={c.title}>Create new item:</div>
                <EditForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default EditModal;
