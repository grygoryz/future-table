import {connect} from "react-redux";
import EditModal from "../components/EditModal/EditModal";
import React from "react";
import {TableActions} from "../actions/TableActions";
import {TableItem} from "../types/types";

const EditModalContainer: React.FC<Props> = ({setEditMode, addItem}) => {

    const closeModal = () => setEditMode(false);

    const onSubmit = (formData: TableItem) => {
       addItem(formData);
       closeModal()
    };

    return <EditModal closeModal={closeModal} onSubmit={onSubmit}/>
};

const dispatchProps = {setEditMode: TableActions.setEditMode, addItem: TableActions.addItem};

export default connect(null, dispatchProps)(EditModalContainer)

type MapDispatchProps = {
    setEditMode: (value: boolean) => void
    addItem: (item: TableItem) => void
}

type Props = MapDispatchProps;

