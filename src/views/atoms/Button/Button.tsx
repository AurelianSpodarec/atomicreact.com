function Button({
    children,
    as = "button",
    variant = "primary",
    kind = "solid",
    type = "button",
    size = "md",
    radius = "md",
}:ButtonProps) {
    const Tag = as;
    return (
        <Tag className={`button button-solid button-${variant}`}>
            {children}
        </Tag>
    )
}

export default Button;

interface ButtonProps {
    children: any;
    as?: "a" | "button";
    variant?: "primary" | "secondary" | "link";
    kind?: "solid" | "outline";
    type?: "submit" | "button" | "reset";
    size?: "md";
    radius?: "md";
    // href?: string; only allowed if as is an 'a'
    // href?: string;
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    isLoading?: boolean;

    icon?: any;
    iconPosition?: any;
}