import {config, useSpring} from "react-spring";

export const useScaleAnimation = (from: number, to: number) => {
    return useSpring({
        from: {transform: `scale(${from})`},
        transform: `scale(${to})`,
        config: config.wobbly
    });
};