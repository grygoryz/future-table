import React from "react";
import {connect} from "react-redux";
import Header from "../components/Header/Header";
import {useLocation} from "react-router-dom";
import {TableActions} from "../actions/TableActions";
import {TableItem} from "../types/types";

const HeaderContainer: React.FC<Props> = ({addItem}) => {
    const location = useLocation();
    const disabled = location.pathname !== "/table";

    return <Header disabled={disabled} />;
};

const dispatchProps = {addItem: TableActions.addItem};

export default connect(null, dispatchProps)(HeaderContainer);

type MapDispatchProps = {
    addItem: (item: TableItem) => void
}

type Props = MapDispatchProps