import React from 'react';
import classNames from 'classnames';

function Button(props:Props) {
    const {
        children,
        label = "",
        as = "button",
        // href = false,
        variant = "primary",
        kind = "solid",
        type = "button",
        size = "md",
        radius = "md",
        // disabled = false,
    } = props;

    const prefix = "button";

    const Tag = as;
    const labell = label || children;

    return (
        <Tag 
            type={type}
            className={classNames(
                prefix,
                variant && `${prefix}-${variant}`,
                kind && `${prefix}-${kind}`,
                size && `${prefix}-${size}`,
            )} 
            // href={href}
            // disabled={disabled}
        >
            {labell}
        </Tag>
    )
}

export default Button;

interface Props {
    className?: string;
    children?: React.ReactNode;
    label?: string;
    as?: string | "a" | "button";
    variant?: string | "primary" | "secondary" | "link";
    kind?: string | "solid" | "outline" | "ghost";
    type?: string | "submit" | "button" | "reset";
    size?: string | "md";
    radius?: string | "md";
    // href?: string; only allowed if as is an 'a'
    href?: string;
    block?: boolean;
    active?: boolean;
    // disabled?: boolean;
    isLoading?: boolean;

    icon?: any;
    iconPosition?: any;
}