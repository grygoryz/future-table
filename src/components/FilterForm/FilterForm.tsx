import React from "react";
import c from "./FilterForm.module.scss";
import SearchButton from "../common/SearchButton/SearchButton";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

const FilterComponent: React.FC<InjectedFormProps<FilterFormValues>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={c.form}>
            <Field name="filterKey" component="input" placeholder="Search..."/>
            <SearchButton/>
        </form>
    );
};

export default reduxForm<FilterFormValues>({form: "filter-form"})(FilterComponent);

export type FilterFormValues = {
    filterKey: string
}
