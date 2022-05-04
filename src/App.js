import * as yup from "yup";
import update from "immutability-helper";
import { useState, useCallback, memo } from "react";

import { Form } from "./Form/Form";

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const App = memo(() => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const onFieldChange = useCallback((fieldName, value) => {
    setValues((prevValues) =>
      update(prevValues, {
        [fieldName]: {
          $set: value,
        },
      })
    );
  }, []);
  console.log("re-render");
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const isFormValid = await formSchema.isValid(values, {
        abortEarly: false,
      });
      if (isFormValid) {
        alert("Form validation succeeded");
      } else {
        formSchema.validate(values, { abortEarly: false }).catch((err) => {
          const errors = err.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: true,
            };
          }, {});
          setErrors((prevErrors) =>
            update(prevErrors, {
              $set: errors,
            })
          );
        });
      }
    },
    [values]
  );

  return (
    <Form
      values={values}
      errors={errors}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
    />
  );
});
