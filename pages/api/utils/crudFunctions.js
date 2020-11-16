import { mutate } from 'swr';

const handleUpdateTodo = async (todo) => {
  mutate('/api/getTodos', async (todos) => {
    const res = await fetch('/api/updateTodo', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: todo.id,
        fields: {
          completed: !todo.fields.completed,
        },
      }),
    });
    const updatedTodo = await res.json();
    const filteredTodos = todos.filter(
      (cachedTodo) => cachedTodo.id !== todo.id
    );
    return [updatedTodo, ...filteredTodos];
  });
};

const handleDeleteTodo = async (todo) => {
  mutate('/api/getTodos', async (todos) => {
    const res = await fetch('api/deleteTodo', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: todo.id,
      }),
    });
    const deletedTodo = res.json();
    const newTodos = todos.filter((todo) => todo.id !== deletedTodo.id);
    return [...newTodos];
  });
};

const handleCreateTodo = async (description) => {
  mutate('/api/getTodos', async (todos) => {
    const res = await fetch('api/createTodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description,
      }),
    });
    const newTodo = await res.json();
    return [newTodo, ...todos];
  });
};

export { handleDeleteTodo, handleUpdateTodo, handleCreateTodo };
