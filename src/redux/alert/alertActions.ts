import { alertActionTypes, HIDE_ALERT, SHOW_ALERT } from './alertActionTypes';
import { IShowAlert } from './types';

export function hideAlert(): alertActionTypes {
  return ({
    type: HIDE_ALERT,
  });
}

export const showAlert = (alert: IShowAlert): alertActionTypes => ({
  type: SHOW_ALERT,
  message: alert.message,
  severity: alert.severity,
});
