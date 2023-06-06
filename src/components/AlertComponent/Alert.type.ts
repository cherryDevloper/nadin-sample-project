export type AlertType = 'success' | 'error' | 'warning';

export interface AlertComponentProps {
  type: AlertType;
  message: string;
  showAlert: boolean;
  hideAfter: number;
  onHide: () => void;
}
