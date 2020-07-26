import React from "react";
import SelectPage from "../components/SelectPage/SelectPage";
import {connect} from "react-redux";
import {getData} from "../actions/TableActions";
import {SelectFormValues} from "../components/SelectPage/SelectForm/SelectForm";
import {DatasetSize} from "../types/types";
import {AppState} from "../store/configureStore";
import { useHistory } from "react-router-dom";

const SelectPageContainer: React.FC<Props> = ({getData}) => {
    const history = useHistory();

    const onSubmit = (formData: SelectFormValues) => {
        history.push("/table");
        getData(formData.datasetSize);
    };

    return <SelectPage onSubmit={onSubmit}/>;
};

export default connect<{}, MapDispatchProps, {}, AppState>(null, {getData})(SelectPageContainer);

type MapDispatchProps = {
    getData: (size: DatasetSize) => void
}

type Props = MapDispatchProps;