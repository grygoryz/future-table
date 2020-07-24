import React from "react";
import c from "./Select.module.scss"
import {WrappedFieldProps} from "redux-form";

type Props = {
    value: string
}

const Select: React.FC<WrappedFieldProps & Props> = ({value, children,  input, ...rest}) => {
    return (
        <div>
            <select  {...input} value={value} className={c.select}>
                {children}
            </select>
        </div>
    )
};

export default Select