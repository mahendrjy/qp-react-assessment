import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  name: string;
  placeholder: string;
  ariaLabel: string;
}

const Textarea = (props: Props) => {
  const { value, onChange, rows = 4, name, placeholder, ariaLabel } = props;
  return (
    <>
      <textarea
        rows={rows}
        name={name}
        className="block w-full p-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
      />
    </>
  );
};

export default Textarea;
