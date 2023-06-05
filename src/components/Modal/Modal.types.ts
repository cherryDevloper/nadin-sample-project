export interface NameFormProps {
  open: boolean;
  onClose: (value: Name) => void;
  onSubmit: (event: React.FormEvent) => void;
  onChangeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: { firstName: string; lastName: string };
}
export interface Name {
  firstName: string;
  lastName: string;
}
