import React from "react";
import { Todo } from "./Todos";
import { generateTodos } from "../utils";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

const GenerateTodos = (props: Props) => {
  const { setTodos } = props;

  const handleAddNTodos = () => {
    setTodos((prev) => [...(prev || []), ...generateTodos()]);
  };

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="cursor-pointer rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        onClick={handleAddNTodos}
      >
        Add 10K Todos
      </button>
    </div>
  );
};

export default GenerateTodos;
