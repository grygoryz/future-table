import React from "react";
import {connect} from "react-redux";
import Header from "../components/Header/Header";
import {useLocation} from "react-router-dom";
import {TableActions} from "../actions/TableActions";
import {TableItem} from "../types/types";
import {AppState} from "../store/configureStore";

const HeaderContainer: React.FC<Props> = ({setEditMode, addItem}) => {
    const location = useLocation();
    const disabled = location.pathname !== "/table";

    const onClick = () => setEditMode(true);

    return <Header disabled={disabled} onClick={onClick}/>;
};

const dispatchProps = {addItem: TableActions.addItem, setEditMode: TableActions.setEditMode};

export default connect<{}, MapDispatchProps, {}, AppState>(null, dispatchProps)(HeaderContainer);

type MapDispatchProps = {
    addItem: (item: TableItem) => void
    setEditMode: (value: boolean) => void
}

type Props = MapDispatchProps