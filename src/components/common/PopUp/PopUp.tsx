import React from "react";
import c from "./PopUp.module.scss";
import {useSpring, animated, config} from "react-spring"

type Props = {
    content: string
}

const PopUp: React.FC<Props> = ({content}) => {
    const props = useSpring({
        from: {transform: "translateY(-100%) scale(0.8)"},
        transform: "translateY(0%) scale(1)",
        config: config.wobbly
    });

    return <animated.div style={props} className={c.container}>{content}</animated.div>
};

export default PopUp;






