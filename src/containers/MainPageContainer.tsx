import React from "react";
import {connect} from "react-redux";
import MainPage from "../components/MainPage/MainPage";
import {AppState} from "../store/configureStore";
import {TableData} from "../types/types";
import Preloader from "../components/common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import EditModalContainer from "./EditModalContainer";
import {TableActions} from "../actions/TableActions";
import {getFilteredData} from "../selectors/table-selectors";
import {FilterFormValues} from "../components/FilterForm/FilterForm";

const MainPageContainer: React.FC<Props> = ({data, isFetching, editMode, setFilterKey}) => {
    if (isFetching) return <Preloader/>;

    if (!data) return <Redirect to="/"/>;

    const onSubmit = (formData: FilterFormValues) => {
        setFilterKey(formData.filterKey || "");
    };

    return <>
        {editMode && <EditModalContainer/>}
        <MainPage onSubmit={onSubmit} data={data!}/>
    </>
};

const mapStateToProps = (state: AppState) => {
    return {
        data: getFilteredData(state),
        isFetching: state.table.isFetching,
        editMode: state.table.editMode
    }
};

const dispatchProps = {setFilterKey: TableActions.setFilterKey};

export default connect(mapStateToProps, dispatchProps)(MainPageContainer);

type MapStateProps = {
    data: TableData | null
    isFetching: boolean
    editMode: boolean
}

type MapDispatchProps = {
    setFilterKey: (key: string) => void
}

type Props = MapStateProps & MapDispatchProps

