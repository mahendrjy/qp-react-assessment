import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  return { value, setValue, onChange };
};

export default useInput;
