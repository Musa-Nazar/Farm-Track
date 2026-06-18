import { useState } from "react";

function useForm(schema) {
  const usedSchema = {};
  for (const key in schema) {
    usedSchema[key] = {
      value: schema[key]?.value || "",
      pattern: schema[key]?.pattern,
      isValid: false,
      isTouched: false,
    };
  }
  const [formSchema, setFormSchema] = useState(usedSchema);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormSchema((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        isValid:
          name !== "confirmPassword"
            ? prevState[name]?.pattern?.test(value)
            : prevState[name]?.pattern?.test(value) &&
              value === prevState?.password?.value,
        isTouched: true,
      },
    }));
  }

  return { handleChange, formSchema };
}

export default useForm;
