import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import Button from "../../common/Button/Button";
import c from "./EditForm.module.scss"
import {TableItem} from "../../../types/types";
import {required} from "../../../utils/validators";

const EditForm: React.FC<InjectedFormProps<EditFormValues>> = ({handleSubmit, invalid}) => {

    return <form onSubmit={handleSubmit} className={c.form}>
        <Field name="id" placeholder="id" component="input" validate={[required]}/>
        <Field name="firstName" placeholder="firstName" component="input" validate={[required]}/>
        <Field name="lastName" placeholder="lastName" component="input" validate={[required]}/>
        <Field name="email" placeholder="email" component="input" validate={[required]}/>
        <Field name="phone" placeholder="phone" component="input" validate={[required]}/>
        <Button disabled={invalid} title="Add item" type="submit"/>
    </form>
};

export default reduxForm<EditFormValues>({form: "edit-form"})(EditForm)

type EditFormValues = TableItem;