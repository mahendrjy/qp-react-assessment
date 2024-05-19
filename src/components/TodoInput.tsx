import React, { useCallback, useMemo } from "react";
import useInput from "../hooks/useInput";
import { Button } from "../common/Button";
import Textarea from "../common/Textarea";

interface Props {
  addTodo: (value: string) => void;
}

const TodoInput = (props: Props) => {
  const { addTodo } = props;
  const { value, setValue, onChange } = useInput();
  const trimmedValue = useMemo(() => value.trim(), [value]);

  const handleAddTodo = useCallback(() => {
    if (trimmedValue) {
      addTodo(trimmedValue);
      setValue("");
    }
  }, [trimmedValue, addTodo, setValue]);

  return (
    <div className="space-y-2">
      <Textarea
        name="add todo"
        placeholder="Add Todo"
        value={value}
        onChange={onChange}
        ariaLabel="Input field for adding a new todo"
      />
      <div className="flex justify-end">
        <Button
          disabled={trimmedValue.length === 0}
          onClick={handleAddTodo}
          ariaLabel="Button to add a new todo"
        >
          Add Todo
        </Button>
      </div>
    </div>
  );
};

export default TodoInput;
