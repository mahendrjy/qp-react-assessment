import { describe, expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("TodoItem", async () => {
  const mockTodo = {
    id: 1,
    title: "New Todo",
    completed: false,
  };
  const mockToggleTodo = vi.fn();

  test("calls toggleTodo on checkbox click", async () => {
    const todo = render(
      <TodoItem todo={mockTodo} toggleTodo={mockToggleTodo} />,
    );
    const checkbox = await todo.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });
});
