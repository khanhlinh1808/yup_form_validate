import { memo } from "react";

import { Field } from "./FormField";

export const Form = memo((props) => {
  return (
    <form onSubmit={props.onSubmit} noValidate>
      <Field
        labelText="Email"
        fieldType="email"
        fieldName="email"
        fieldValue={props.values.email}
        hasError={props.errors.email}
        onFieldChange={props.onFieldChange}
        placeholder="Enter your email address"
      />
      <Field
        labelText="Password (At least 8 characters)"
        fieldType="password"
        fieldName="password"
        fieldValue={props.values.password}
        hasError={props.errors.password}
        onFieldChange={props.onFieldChange}
        placeholder="Enter your password"
      />
      <button type="submit">Log In</button>
    </form>
  );
});
