import React, { memo } from "react";
import classnames from "classnames";

const Input = ({
  placeholder,
  value,
  name,
  type,
  error,
  icon,
  onChange,
  autoComplete,
  label,
  mb,
  error_fixed,
  checked
}) => {
  let inputClasses = classnames("form-control", {
    "is-invalid": error
  });

  let errorClasses = classnames("invalid-feedback", {
    fixed: error_fixed
  });

  return (
    <div className={`input-group mb-${mb}`}>
      {icon && (
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={icon} />
          </span>
        </div>
      )}
      {label && <label> {label} </label>}
      {type !== "checkbox" ? (
        <input
          className={inputClasses}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          name={name}
          value={value ? value : ""}
          type={type}
          aria-label={name}
        />
      ) : (
        <input
          className={inputClasses}
          onChange={onChange}
          value={value ? value : ""}
          name={name}
          type={type}
          checked={checked ? checked : null}
        />
      )}
      {error && <div className={errorClasses}>{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  mb: 3
};

export default memo(Input);
