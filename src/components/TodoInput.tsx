import useInput from "../hooks/useInput";

interface Props {
  addTodo: (value: string) => void;
}

const TodoInput = (props: Props) => {
  const { addTodo } = props;
  const { value, setValue, onChange } = useInput();

  const handleAddTodo = () => {
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <div className="space-y-2">
      <textarea
        rows={4}
        name="add todo"
        className="p-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        placeholder="Add Todo..."
        value={value}
        onChange={onChange}
      />
      <div className="flex justify-end">
        <button
          type="button"
          className="w-32 disabled:bg-gray-400 cursor-pointer rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          disabled={value.trim().length === 0}
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
