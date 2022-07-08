import "./InputField.scss";

function InputField({ label, name, type, placeholder, defaultValue, required, multiple }) {
    return (
        <div className="input-field">
            <label htmlFor={name} className="input-field__label">
                {label}
            </label>
            <input type={type} id={name} name={name} placeholder={placeholder} defaultValue={defaultValue} required={required} multiple={multiple} className="input-field__input" />
        </div>
    );
}

export default InputField;