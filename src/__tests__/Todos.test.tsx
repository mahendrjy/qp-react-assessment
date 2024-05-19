import { describe, expect, test } from "vitest";
import Todos from "../components/Todos";
import { fireEvent, render } from "@testing-library/react";

describe("Todos", async () => {
  const todos = render(<Todos />);

  const textarea = await todos.findByPlaceholderText("Add Todo");
  const button = await todos.findByText("Add Todo");

  test("adds a new todo", async () => {
    fireEvent.input(textarea, { target: { value: "New Todo" } });
    fireEvent.click(button);
    expect(await todos.findByText("New Todo")).not.toBeNull();
  });

  test("toggles a completed todo", async () => {
    const checkbox = await todos.findByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", true);
    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", false);
  });

  test("adds long todo", async () => {
    fireEvent.input(textarea, {
      target: {
        value: "This is a very long todo that exceeds the character limit",
      },
    });
    fireEvent.click(button);
    expect(
      await todos.findByText(
        "This is a very long todo that exceeds the character limit",
      ),
    ).not.toBeNull();
  });

  test("adds a todo with special characters", async () => {
    fireEvent.input(textarea, {
      target: { value: "Todo with special characters !@#$%^&*" },
    });
    fireEvent.click(button);
    expect(
      await todos.findByText("Todo with special characters !@#$%^&*"),
    ).not.toBeNull();
  });
});
