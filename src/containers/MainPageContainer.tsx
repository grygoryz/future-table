import React from "react";
import {connect} from "react-redux";
import MainPage from "../components/MainPage/MainPage";
import {AppState} from "../store/configureStore";
import {TableData} from "../types/types";
import Preloader from "../components/common/Preloader/Preloader";
import { Redirect } from "react-router-dom";
import EditModal from "../components/EditModal/EditModal";
import {TableActions} from "../actions/TableActions";
import EditModalContainer from "./EditModalContainer";

const MainPageContainer: React.FC<Props> = ({data, isFetching, editMode}) => {

    if (isFetching) return <Preloader/>;

    if (!data) return <Redirect to="/"/>;

    return <>
        {editMode && <EditModalContainer/>}
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


export default connect(mapStateToProps)(MainPageContainer);

type MapStateProps = {
    data: TableData | null
    isFetching: boolean
    editMode: boolean
}

type Props = MapStateProps

