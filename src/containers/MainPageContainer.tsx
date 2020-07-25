import React from "react";
import {connect} from "react-redux";
import MainPage from "../components/MainPage/MainPage";
import {AppState} from "../store/configureStore";
import {TableItem} from "../types/types";
import Preloader from "../components/common/Preloader/Preloader";
import EditModalContainer from "./EditModalContainer";
import {TableActions} from "../actions/TableActions";
import {FilterFormValues} from "../components/FilterForm/FilterForm";

const MainPageContainer: React.FC<Props> = ({isFetching, editMode, setFilterKey, selectedItem}) => {

    const onSubmit = (formData: FilterFormValues) => {
        setFilterKey(formData.filterKey || "");
    };

    if (isFetching) return <Preloader/>;

    return <>
        {editMode && <EditModalContainer/>}
        <MainPage onSubmit={onSubmit} selectedItem={selectedItem}/>
    </>
};

const mapStateToProps = (state: AppState) => {
    return {
        isFetching: state.table.isFetching,
        editMode: state.table.editMode,
        selectedItem: state.table.selectedItem,
    }
};

const dispatchProps = {
    setFilterKey: TableActions.setFilterKey,
};

export default connect(mapStateToProps, dispatchProps)(MainPageContainer);

type MapStateProps = {
    selectedItem: TableItem | null
    isFetching: boolean
    editMode: boolean
}

type MapDispatchProps = {
    setFilterKey: (key: string) => void
}

type Props = MapStateProps & MapDispatchProps

