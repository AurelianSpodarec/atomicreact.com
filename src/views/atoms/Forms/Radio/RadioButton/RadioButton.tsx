function RadioButton({className, onChange, label, name, value}:any) {
    return (
        <label className={className}>
            {label}
            <input className={`sr-only`} type="radio" onChange={onChange} name={name} value={value}/>
        </label>
    )
}

export default RadioButton;