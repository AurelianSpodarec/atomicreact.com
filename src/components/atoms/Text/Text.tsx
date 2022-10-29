import { ReactNode, } from "react";

const types: any = {
    p: "p",
    span: "span",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
};

const sizes: any = {
    xs: "xs",
    sm: "sm",
    base: "base",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
    "3xl": "3xl",
    "4xl": "4xl",
    "5xl": "5xl",
};

const weights: any = {
    thin: "thin",
    extralight: "extralight",
    light: "light",
    normal: "normal",
    medium: "medium",
    semibold: "semibold",
    bold: "bold",
    extrabold: "extrabold",
    black: "black",
};

function Text({
    title,
    children,
    type,
    size,
    weight = "normal",
    className = "",
    style,
}: TextProps) {
    // @ts-ignore
    const Tag = types[type] || types.p; // @ts-ignore
    const customClassName = `${className} text--${sizes[size] || sizes.base} font-${
        weights[weight] || weights.normal
    }`;

    if (!Tag) return <></>;
    return (
        <Tag style={style} className={customClassName}>
            {title ? title : children}
        </Tag>
    );
}

export default Text;

interface TextProps {
    title?: string;
    children?: ReactNode;
    type?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xs" | "sm" | "md" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    weight?:
        | "thin"
        | "extralight"
        | "light"
        | "normal"
        | "medium"
        | "semibold"
        | "bold"
        | "extrabold"
        | "black";
    className?: string;
    style?: object;
}