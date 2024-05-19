import React from "react";

interface Props {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  ariaLabel: string;
}

export const Button = (props: Props) => {
  const { onClick, disabled, children, ariaLabel } = props;
  return (
    <button
      type="button"
      className="cursor-pointer disabled:bg-gray-400 rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      onClick={onClick}
      disabled={disabled}
      role="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
