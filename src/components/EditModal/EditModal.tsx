import React from "react";
import c from "./EditModal.module.scss";
import EditForm from "./EditForm/EditForm";
import {TableItem} from "../../types/types";
import {useSpring, config, animated} from "react-spring";
import {useFadeInAnimation} from "../../hooks/animation-hooks";

type Props = {
    closeModal: () => void
    onSubmit: (formData: TableItem) => void
}

const EditModal: React.FC<Props> = ({closeModal, onSubmit}) => {
    const fadeIn = useFadeInAnimation();

    const slideDown = useSpring({
        from: {transform: "translateY(-50px) translateX(-50%)"},
        transform: "translateY(0) translateX(-50%)",
        config: config.stiff
    });

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.className === c.container) closeModal();
    };

    return (
        <animated.div style={fadeIn} onClick={onClick} className={c.container}>
            <animated.div style={slideDown} className={c.window}>
                <div className={c.title}>Create new item:</div>
                <EditForm onSubmit={onSubmit}/>
            </animated.div>
        </animated.div>
    );
};

export default EditModal;
