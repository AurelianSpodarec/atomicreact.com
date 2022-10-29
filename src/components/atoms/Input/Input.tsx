function Input(props:InputProps) {
    
    const {
        id,
        className,
        placeholder,
        variant = "primary",
        kind = "outline",
        disabled = false,
        fullWidth = false,
        label,
        labelPosition = "top",
        icon,
        iconPosition = "right",
        type = "text",
        defaultValue,
        helperText,
    } = props;

    return (
        <>
            <label></label>
            <input placeholder={placeholder} />
        </>
    );
}

export default Input;

interface InputProps {
    id?: string;
    className?: string;
    placeholder?: string;
    variant?: "primary" | "secondary";
    kind?: "outline" | "filled" | "standard";
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    labelPosition?: "top" | "right" | "bottom" | "left";
    icon?: string;
    iconPosition?: "left" | "right";
    type?: "number" | "email" | "tel" | "text" | "password" ;
    defaultValue?: string;
    helperText?: string;
}