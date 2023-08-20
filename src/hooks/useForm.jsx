import { useState } from "react";

export function useForm() {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value });
    setIsValid(event.target.closest('form').checkValidity());
  };

  return {values, handleChange, setValues, isValid, setIsValid};
}
