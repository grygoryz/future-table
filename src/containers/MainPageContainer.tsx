import React from "react";
import {connect} from "react-redux";
import MainPage from "../components/MainPage/MainPage";
import {AppState} from "../store/configureStore";
import {PaginationConfig, SortConfig, TableData, TableItem} from "../types/types";
import Preloader from "../components/common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import EditModalContainer from "./EditModalContainer";
import {TableActions} from "../actions/TableActions";
import {getFilteredData, getSortedData, getSuitableData} from "../selectors/table-selectors";
import {FilterFormValues} from "../components/FilterForm/FilterForm";

const MainPageContainer: React.FC<Props> = ({data, isFetching, editMode,
                                                setFilterKey, sortConfig, setSortConfig,
                                                paginationConfig, turnPage, selectedItem, selectItem}) => {

    const onSubmit = (formData: FilterFormValues) => {
        setFilterKey(formData.filterKey || "");
    };

    const requestSort = (key: string) => {
        const direction = sortConfig && sortConfig.key === key && sortConfig.direction === 'asc' ? "desc" : "asc";
        setSortConfig({key, direction});
    };

    if (isFetching) return <Preloader/>;

    if (!data) return <Redirect to="/"/>;

    return <>
        {editMode && <EditModalContainer/>}
        <MainPage
            data={data}
            onSubmit={onSubmit}
            requestSort={requestSort}
            sortConfig={sortConfig}
            paginationConfig={paginationConfig}
            turnPage={turnPage}
            selectedItem={selectedItem}
            selectItem={selectItem}
        />
    </>
};

const mapStateToProps = (state: AppState) => {
    return {
        data: getSuitableData(state),
        isFetching: state.table.isFetching,
        editMode: state.table.editMode,
        selectedItem: state.table.selectedItem,
        sortConfig: state.table.sortConfig,
        paginationConfig: state.table.paginationConfig
    }
};

const dispatchProps = {
    setFilterKey: TableActions.setFilterKey,
    setSortConfig: TableActions.setSortConfig,
    turnPage: TableActions.turnPage,
    selectItem: TableActions.selectItem
};

export default connect(mapStateToProps, dispatchProps)(MainPageContainer);

type MapStateProps = {
    data: TableData | null
    selectedItem: TableItem | null
    isFetching: boolean
    editMode: boolean
    sortConfig: SortConfig | null
    paginationConfig: PaginationConfig
}

type MapDispatchProps = {
    setFilterKey: (key: string) => void
    setSortConfig: (config: SortConfig) => void
    turnPage: (isNext: boolean) => void
    selectItem: (item: TableItem) => void
}

type Props = MapStateProps & MapDispatchProps

