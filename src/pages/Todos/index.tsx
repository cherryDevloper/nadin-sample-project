import React, { useState } from 'react';
import { Button, List, TextField } from '@mui/material';
import { Todo } from './Todos.type';
import TodoItem from './TodoItem';

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    const trimmedTodo = newTodo.trim();
    if (trimmedTodo !== '') {
      const newId = todos.length + 1;
      const newTodoItem: Todo = {
        id: newId,
        text: trimmedTodo,
        isEditing: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };

  const handleToggleEdit = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TextField
        label="New Todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        Add Todo
      </Button>
      <List sx={{ marginTop: '20px' }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={handleEditTodo}
            onToggleEdit={handleToggleEdit}
            onDelete={handleDeleteTodo}
          />
        ))}
      </List>
    </div>
  );
}

export default Todos;
