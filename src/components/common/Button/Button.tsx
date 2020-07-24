import React from "react";
import c from "./Button.module.scss";
import cn from "classnames"

type Props = {
    title: string
    type?: "button" | "submit" | "reset"
    onClick?: (...args: any[]) => void
    className?: string
    disabled?: boolean
}

const Button: React.FC<Props> = ({onClick, title, type, className, disabled}) => {
    return (
        <div className={cn(className, {[c.btn_disabled]: disabled})}>
            <button disabled={disabled} type={type} className={c.btn} onClick={onClick}>
                {title}
            </button>
        </div>
    );
};

export default Button;