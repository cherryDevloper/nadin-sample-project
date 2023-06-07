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
import { TodoItemProps } from './Todos.type';

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onEdit,
  onToggleEdit,
  onDelete,
}) => {
  const [editedText, setEditedText] = useState(todo.text);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  const handleDoneClick = () => {
    onEdit(todo.id, editedText);
    onToggleEdit(todo.id);
  };

  return (
    <ListItem
      key={todo.id}
      sx={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '10px',
      }}
    >
      {todo.isEditing ? (
        <ListItemText sx={{ color: 'primary.main' }}>
          <TextField value={editedText} onChange={handleTextChange} fullWidth />
        </ListItemText>
      ) : (
        <ListItemText primary={todo.text} sx={{ color: 'primary.main' }} />
      )}
      <ListItemSecondaryAction>
        {todo.isEditing ? (
          <IconButton edge="end" aria-label="done" onClick={handleDoneClick}>
            <DoneIcon />
          </IconButton>
        ) : (
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => onToggleEdit(todo.id)}
          >
            <EditIcon />
          </IconButton>
        )}
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default TodoItem;
