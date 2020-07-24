import React from "react";
import {connect} from "react-redux";
import MainPage from "../components/MainPage/MainPage";
import {AppState} from "../store/configureStore";
import {TableData} from "../types/types";
import Preloader from "../components/common/Preloader/Preloader";
import { Redirect } from "react-router-dom";
import EditModal from "../components/EditModal/EditModal";
import {TableActions} from "../actions/TableActions";

const MainPageContainer: React.FC<Props> = ({data, isFetching, editMode, setEditMode}) => {

    if (isFetching) return <Preloader/>;

    if (!data) return <Redirect to="/"/>;

    return <>
        {editMode && <EditModal closeModal={() => setEditMode(false)}/>}
        <MainPage data={data!} />
        </>
};

const mapStateToProps  = (state: AppState) => {
    return {
        data: state.table.data,
        isFetching: state.table.isFetching,
        editMode: state.table.editMode
    }
};

const dispatchProps = {setEditMode: TableActions.setEditMode};

export default connect(mapStateToProps, dispatchProps)(MainPageContainer);

type MapStateProps = {
    data: TableData | null
    isFetching: boolean
    editMode: boolean
}

type MapDispatchProps = {
    setEditMode: (value: boolean) => void
}

type Props = MapStateProps & MapDispatchProps

