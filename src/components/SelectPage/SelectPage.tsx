import React from "react";
import c from "./SelectPage.module.scss";
import SelectForm, {SelectFormValues} from "./SelectForm/SelectForm";

type Props = {
    onSubmit: (formData: SelectFormValues) => void
}

const SelectPage: React.FC<Props> = ({onSubmit}) => {
    return (
        <div className={c.container}>
            <div className={c.title}>Select dataset size and press load.</div>
            <SelectForm initialValues={{datasetSize: "small"}}  onSubmit={onSubmit}/>
        </div>
    );
};

export default SelectPage;
