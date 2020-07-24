import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import Select from "../../common/Select/Select";
import Button from "../../common/Button/Button";
import c from "./SelectForm.module.scss"
import { DatasetSize } from "../../../types/types";

const SelectForm: React.FC<InjectedFormProps<SelectFormValues>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field className={c.select} name="datasetSize" component={Select}>
                <option value="big">BIG (1000 rows)</option>
                <option value="small">SMALL (32 rows)</option>
            </Field>
            <Button title="LOAD" type="submit" className={c.button}/>
        </form>
    );
};

export default reduxForm<SelectFormValues>({form: "select-form"})(SelectForm);

export type SelectFormValues = {
    datasetSize: DatasetSize
}

