export const generateTodos = () => {
  const todos = [];
  for (let i = 1; i <= 10000; i++) {
    todos.push({
      id: Date.now(),
      title: `Todo ${i}`,
      completed: Math.random() > 0.5,
    });
  }
  return todos;
};
