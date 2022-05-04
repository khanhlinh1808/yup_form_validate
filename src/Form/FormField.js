import { memo, useCallback } from "react";

export const Field = memo((props) => {
  const onFieldChange = useCallback(
    (e) => {
      props.onFieldChange(props.fieldName, e.target.value);
    },
    [props.onFieldChange, props.fieldName]
  );
  return (
    <fieldset>
      <label htmlFor={props.fieldName}>{props.labelText}</label>
      <input
        type={props.fieldType}
        name={props.fieldName}
        id={props.fieldName}
        onChange={onFieldChange}
        value={props.fieldValue}
        placeholder={props.placeholder}
      />
      {props.hasError && (
        <p>{`Please fill in the correct value for ${props.labelText}`}</p>
      )}
    </fieldset>
  );
});
