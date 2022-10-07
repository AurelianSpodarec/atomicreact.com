function RadioButton({className, componentLeft, onChange, label, name, value}:any) {
    return (
        <label className={className}>
            {componentLeft && componentLeft}
            {label}
            <input className={`sr-only`} type="radio" onChange={onChange} name={name} value={value}/>
        </label>
    )
}

export default RadioButton;