import { ReactNode, } from "react";

function Container({ children, className = "hwees", style, size, }: ContainerProps) {
    const options: any = {
        fluid: "fluid",
        sm: "sm",
        base: "base",
        xs: "xs",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
    };

    return (
        <div
            style={style}
            className={`${className} mx-auto container ${size ? `container--${options[size]}` : "container--fluid"}`}
        >
            {children}
        </div>
    );
}

export default Container;

interface ContainerProps {
    children: ReactNode;
    style?: object;
    size?: string;
    className?: string;
}