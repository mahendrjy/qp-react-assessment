import { describe, expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import TodoInput from "../components/TodoInput";

describe("TodoInput", async () => {
  const mockAddTodo = vi.fn();
  const todoInput = render(<TodoInput addTodo={mockAddTodo} />);
  const textarea = await todoInput.findByPlaceholderText("Add Todo");
  const button = await todoInput.findByText("Add Todo");

  test("disables the add button when textarea is empty", async () => {
    fireEvent.change(textarea, { target: { value: "" } });
    expect(button).toHaveProperty("disabled", true);
  });

  test("enables the add button when there is text in the textarea", async () => {
    fireEvent.change(textarea, { target: { value: "New Todo" } });
    expect(button).toHaveProperty("disabled", false);
  });

  test("clears the textarea after adding todo", async () => {
    expect(textarea).toHaveProperty("value", "New Todo");
    fireEvent.click(button);
    expect(mockAddTodo).toHaveBeenCalledWith("New Todo");
    expect(textarea).toHaveProperty("value", "");
  });
});
