export interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
}
export interface TodoItemProps {
  todo: Todo;
  onEdit: (id: number, newText: string) => void;
  onToggleEdit: (id: number) => void;
  onDelete: (id: number) => void;
}
