import { describe, expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import GenerateTodos from "../components/GenerateTodos";

describe("GenerateTodos", async () => {
  const mockSetTodos = vi.fn();
  const generateTodo = render(<GenerateTodos setTodos={mockSetTodos} />);
  const button = await generateTodo.findByText("Load More Todos");

  test("adds more todos", async () => {
    fireEvent.click(button);

    expect(await generateTodo.findByText("Loading...")).toBeTruthy();
  });
});
