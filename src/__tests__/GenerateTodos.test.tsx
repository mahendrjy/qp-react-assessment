import { describe, expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import GenerateTodos from "../components/GenerateTodos";

describe("GenerateTodos", async () => {
  const mockSetTodos = vi.fn();
  const generateTodo = render(<GenerateTodos setTodos={mockSetTodos} />);
  const button = await generateTodo.findByText("Add 10K Todos");

  test("adds 10K todos", async () => {
    fireEvent.click(button);
    expect(mockSetTodos).toHaveBeenCalled();
  });
});
