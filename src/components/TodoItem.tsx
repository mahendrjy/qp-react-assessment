import React from "react";
import classNames from "classnames";
import { Todo } from "./Todos";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem = React.memo(({ todo, toggleTodo }: Props) => {
  const handleChange = React.useCallback(() => {
    toggleTodo(todo.id);
  }, [toggleTodo, todo.id]);

  const labelClassName = classNames("font-medium w-full h-full", {
    "line-through text-gray-400": todo.completed,
    "text-gray-500": !todo.completed,
  });

  return (
    <li className="flex items-start h-full">
      <div className="flex items-center h-6">
        <input
          id={`${todo.id}`}
          checked={todo.completed}
          onChange={handleChange}
          aria-describedby={todo.title}
          name={todo.title}
          type="checkbox"
          className="w-4 h-4"
          role="checkbox"
        />
      </div>
      <div className="w-full h-full ml-3 overflow-y-auto text-sm leading-6">
        <label htmlFor={`${todo.id}`} className={labelClassName}>
          {todo.title}
        </label>
      </div>
    </li>
  );
});

export default TodoItem;
