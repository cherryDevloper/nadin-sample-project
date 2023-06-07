export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertComponentProps {
  type: AlertType;
  message: string;
  showAlert: boolean;
  hideAfter?: number;
  onHide?: () => void;
}
