import React, { useState } from 'react';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { Todo } from './Todos.type';

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length + 1;
      const newTodoItem: Todo = {
        id: newId,
        text: newTodo,
        isEditing: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: newText,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleToggleEdit = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isEditing: !todo.isEditing,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TextField
        label="New Todo"
        value={newTodo}
        onChange={handleInputChange}
        // sx={{ marginBottom: '10px' }}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        Add Todo
      </Button>
      <List sx={{ marginTop: '20px' }}>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '10px',
            }}
          >
            {todo.isEditing ? (
              <ListItemText>
                <TextField
                  value={todo.text}
                  onChange={(event) =>
                    handleEditTodo(todo.id, event.target.value)
                  }
                  fullWidth
                />
              </ListItemText>
            ) : (
              <ListItemText primary={todo.text} />
            )}
            <ListItemSecondaryAction>
              {todo.isEditing ? (
                <IconButton
                  edge="end"
                  aria-label="done"
                  onClick={() => handleToggleEdit(todo.id)}
                >
                  <DoneIcon />
                </IconButton>
              ) : (
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleToggleEdit(todo.id)}
                >
                  <EditIcon />
                </IconButton>
              )}
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Todos;
