import React from "react";
import c from "./SelectPage.module.scss";
import SelectForm, {SelectFormValues} from "./SelectForm/SelectForm";
import {animated, useSpring, config} from "react-spring";

type Props = {
    onSubmit: (formData: SelectFormValues) => void
}

const SelectPage: React.FC<Props> = ({onSubmit}) => {
    const slideDown = useSpring({
        from: {transform: "translateY(-50%)"},
        transform: "translateY(0)",
        config: config.wobbly
    });

    return (
        <div className={c.container}>
            <animated.div style={slideDown} className={c.title}>Select dataset size and press load.</animated.div>
            <SelectForm initialValues={{datasetSize: "big"}}  onSubmit={onSubmit}/>
        </div>
    );
};

export default SelectPage;
