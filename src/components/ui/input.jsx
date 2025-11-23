import * as React from "react";
import "../../styles/inputs.css";

const Input = React.forwardRef(
  (
    { className, value, type, border, empty, theme, setstatetext, ...props },
    ref
  ) => {
    return (
      <input
        maxLength={50}
        value={value || ""}
        style={
          empty == "true" && border !== false
            ? { border: "1px solid #eb3d51" }
            : {}
        }
        onChange={(value) => {
          setstatetext(value.target.value);
        }}
        type={type}
        className={`${theme? "form-inputs text-white": "form-inputs2 text-black"}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
