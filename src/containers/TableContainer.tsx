import React from "react";
import {connect} from "react-redux";
import {AppState} from "../store/configureStore";
import {PaginationConfig, SortConfig, TableData, TableItem} from "../types/types";
import {Redirect} from "react-router-dom";
import {TableActions} from "../actions/TableActions";
import {getSuitableData} from "../selectors/table-selectors";
import Table from "../components/Table/Table";

const TableContainer: React.FC<Props> = ({data, sortConfig, setSortConfig,
                                             paginationConfig, turnPage, selectedItem, selectItem}) => {

    const requestSort = (key: string) => {
        const direction = sortConfig && sortConfig.key === key && sortConfig.direction === 'asc' ? "desc" : "asc";
        setSortConfig({key, direction});
    };

    if (!data) return <Redirect to="/"/>;

    return <>
        <Table
            data={data}
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
        selectedItem: state.table.selectedItem,
        sortConfig: state.table.sortConfig,
        paginationConfig: state.table.paginationConfig
    }
};

const dispatchProps = {
    setSortConfig: TableActions.setSortConfig,
    turnPage: TableActions.turnPage,
    selectItem: TableActions.selectItem
};

export default connect(mapStateToProps, dispatchProps)(TableContainer);

type MapStateProps = {
    data: TableData | null
    selectedItem: TableItem | null
    sortConfig: SortConfig | null
    paginationConfig: PaginationConfig
}

type MapDispatchProps = {
    setSortConfig: (config: SortConfig) => void
    turnPage: (isNext: boolean) => void
    selectItem: (item: TableItem) => void
}

type Props = MapStateProps & MapDispatchProps




