import classNames from "classnames";
import Link from "next/link";

// TODO: If 'href' is provided, automatically render 'a' tag and ovveride any input in 'as'.
// TODO: Create reusable types for sizes

function Button(props:ButtonProps) {
    const {
        children,
        label = "",
        onClick,
        as = "button",
        href,
        variant = "primary",
        kind = "solid",
        type = "button",
        size = "md",
        radius = "md",
        ref,
        disabled,
    } = props;

    const prefix = "button";

    const Tag = `${as}` as React.ElementType;
    const content = label || children;

    return (
        <Tag 
            href={href}
            type={type}
            ref={ref}
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                prefix,
                kind && `${prefix}-${kind}`,
                variant && `${prefix}-${variant}`,
                size && `${prefix}-${size}`,
            )} 
        >
            {content}
        </Tag>
    );
}

export default Button;

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: any;
    ref?: any;
    label?: string;
    as?: string | "a" | "button" | "link";
    variant?: string | "primary" | "secondary" | "link" | "success" | "warning" | "danger" | "info";
    kind?: string | "solid" | "outline" | "ghost" | "subtle";
    type?: string | "submit" | "button" | "reset";
    size?: string | "md";
    radius?: string | "md";
    href?: string;
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    isLoading?: boolean;

    icon?: any;
    iconPosition?: any;
}