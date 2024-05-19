import React, { useCallback, useState } from "react";
import { Todo } from "./Todos";
import { generateTodos } from "../utils";
import { Button } from "../common/Button";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

const GenerateTodos = React.memo((props: Props) => {
  const { setTodos } = props;
  const [loading, setLoading] = useState(false);

  const handleAddNTodos = useCallback(async () => {
    setLoading(true);
    setTimeout(() => {
      const newTodos = generateTodos();
      setTodos((prev) => [...(prev || []), ...newTodos]);
      setLoading(false);
    }, 200);
  }, [setTodos]);

  return (
    <div className="flex justify-end">
      <Button
        onClick={handleAddNTodos}
        disabled={loading}
        ariaLabel="Button to load more todos"
      >
        {loading ? "Loading..." : "Load More Todos"}
      </Button>
    </div>
  );
});

export default GenerateTodos;
