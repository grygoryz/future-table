import React from "react";
import c from "./EditModal.module.scss";
import EditForm from "./EditForm/EditForm";

type Props = {
    closeModal: () => void
}

const EditModal: React.FC<Props> = ({closeModal}) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.className === c.container) closeModal();
    };

    return (
        <div onClick={onClick} className={c.container}>
            <div className={c.window}>
                <div className={c.title}>Create new item:</div>
                <EditForm onSubmit={() => console.log("SUBMITTED")}/>
            </div>
        </div>
    );
};

export default EditModal;
