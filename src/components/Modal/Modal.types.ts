export interface NameFormProps {
  open: boolean;
  onClose: (value: DataType) => void;
  onSubmit: (event: React.FormEvent) => void;
  onChangeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLocation: (e: React.ChangeEvent<any>) => void;
  data: DataType;
}
export interface DataType {
  firstName: string;
  lastName: string;
  location: {
    city: string;
    lat: string;
    lng: string;
  } | null;
}
