import {SortConfig, TableData, TableItem} from "../types/types";
import {tableReducer} from "../reducers/table-reducer";
import {TableActions} from "../actions/TableActions";

const state = {
    data: null as null | TableData,
    isFetching: false,
    selectedItem: null as null | TableItem,
    editMode: false,
    filterKey: "",
    sortConfig: null as null | SortConfig,
    paginationConfig: {
        pageSize: 15,
        startIndex: 0
    }
};

const data = [{
    id: 101,
    firstName: 'Sue',
    lastName: 'Corson',
    email: 'DWhalley@in.gov',
    phone: '(612)211-6296',
    address: {
        streetAddress: '9792 Mattis Ct',
        city: 'Waukesha',
        state: 'WI',
        zip: '22178'
    },
    description: 'et lacus magna dolor...',
}];

it('isFetching must be true when data is fetching', () => {
    const newState = tableReducer(state, TableActions.fetchData());
    expect(newState.isFetching).toBe(true);
});

it('data should be loaded', () => {
    const newState = tableReducer(state, TableActions.fetchDataSuccess(data));
    expect(newState.data).not.toBe(null);
});

it('isFetching must be false', () => {
    const newState = tableReducer(state, TableActions.fetchDataFailure());
    expect(newState.isFetching).toBe(false);
});

it('editMode should be with correct value', () => {
    const newState = tableReducer(state, TableActions.setEditMode(true));
    expect(newState.editMode).toBe(true);
});

it('new item should be added', () => {
    const preparedState = tableReducer(state, TableActions.fetchDataSuccess(data));
    const newState = tableReducer(preparedState, TableActions.addItem(data[0]));
    expect(newState.data?.length).toBe(2);
});

it('filterKey should be with correct value', () => {
    const newState = tableReducer(state, TableActions.setFilterKey("test"));
    expect(newState.filterKey).toBe("test");
});

it('sortConfig should be with correct value', () => {
    const newState = tableReducer(state, TableActions.setSortConfig({key: "id", direction: "asc"}));
    expect(newState.sortConfig?.key).toBe("id");
    expect(newState.sortConfig?.direction).toBe("asc");
});

it('startIndex should reset when filterKey changed', () => {
    const newState = tableReducer(state, TableActions.setFilterKey("test"));
    expect(newState.paginationConfig.startIndex).toBe(0);
});

it('startIndex should reset when sortConfig changed', () => {
    const newState = tableReducer(state, TableActions.setSortConfig({key: "id", direction: "asc"}));
    expect(newState.paginationConfig.startIndex).toBe(0);
});

it('startIndex should be with correct value when turning page', () => {
    const newState = tableReducer(state, TableActions.turnPage(true));
    expect(newState.paginationConfig.startIndex).toBe(15);
});

it('selectedItem should be added', () => {
    const newState = tableReducer(state, TableActions.selectItem(data[0]));
    expect(newState.selectedItem).not.toBe(null);
});





