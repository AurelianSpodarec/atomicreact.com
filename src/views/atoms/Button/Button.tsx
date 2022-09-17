import React from 'react';
import classNames from 'classnames';

// TODO: If 'href' is provided, automatically render 'a' tag and ovveride any input in 'as'.
// TODO: Create reusable types for sizes

function Button(props:ButtonProps) {
    const {
        children,
        label = "",
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
    )
}

export default Button;

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    ref?: any;
    label?: string;
    as?: string | "a" | "button";
    variant?: string | "primary" | "secondary" | "link";
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