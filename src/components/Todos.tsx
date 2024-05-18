import { useCallback, useRef } from "react";
import { VariableSizeList as List } from "react-window";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import useFetch from "../hooks/useFetch";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const listRef = useRef<List>(null);
  const { data: todos, setData: setTodos } = useFetch<Todo[]>([]);

  const addTodo = useCallback(
    (text: string) => {
      const newTodo = {
        id: Date.now(),
        title: text,
        completed: false,
      };
      setTodos([...(todos || []), newTodo]);
      if (listRef.current) {
        listRef.current.resetAfterIndex((todos || []).length);
      }
    },
    [setTodos, todos],
  );

  const toggleTodo = useCallback(
    (id: number) =>
      setTodos((prev) =>
        (prev || []).map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      ),
    [setTodos],
  );

  const getItemSize = (index: number) => {
    const textLength = (todos || [])[index].title.length;
    return Math.max(50, Math.ceil(textLength / 100) * 50);
  };

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <div style={style} className="p-3 border-b">
      {(todos || [])[index] && (
        <TodoItem todo={(todos || [])[index]} toggleTodo={toggleTodo} />
      )}
    </div>
  );

  return (
    <>
      <div className="space-y-5">
        <TodoInput addTodo={addTodo} />
        <List
          ref={listRef}
          height={500}
          itemCount={(todos || []).length}
          itemSize={getItemSize}
          width="100%"
          className="border rounded-md shadow-sm"
        >
          {Row}
        </List>
      </div>
    </>
  );
};

export default Todos;
