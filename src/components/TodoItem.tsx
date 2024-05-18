import { Todo } from "./Todos";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem = (props: Props) => {
  const { todo, toggleTodo } = props;

  return (
    <div className="flex items-start h-full">
      <div className="flex items-center h-6">
        <input
          id={`${todo.id}`}
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          aria-describedby={todo.title}
          name={todo.title}
          type="checkbox"
          className="w-4 h-4"
        />
      </div>
      <div className="w-full h-full ml-3 text-sm leading-6">
        <label
          htmlFor={`${todo.id}`}
          className={`font-medium w-full h-full ${todo.completed ? "line-through text-gray-400" : "text-gray-500"}`}
        >
          {todo.title}
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
