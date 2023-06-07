import React, { useState } from 'react';
import { Button, List, TextField, Grid, Typography } from '@mui/material';
import { Todo } from './Todos.type';
import TodoItem from './TodoItem';
import { useTranslation } from 'react-i18next';

function Todos() {
  const { t } = useTranslation();
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          {t('todoList')}{' '}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label={t('newTodo')}
          value={newTodo}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Button variant="contained" onClick={handleAddTodo} fullWidth>
          {t('addTodo')}
        </Button>
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
}

export default Todos;
