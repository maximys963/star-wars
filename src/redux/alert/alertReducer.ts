import { alertActionTypes, HIDE_ALERT, SHOW_ALERT } from './alertActionTypes';
import { IAlertState } from './types';

const initialState: IAlertState = {
  isOpen: false,
  message: '',
  severity: 'warning',
};

export const alertReducer = (state = initialState, action: alertActionTypes): IAlertState => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        severity: action.severity,
      };
    case HIDE_ALERT:
      return {
        ...state,
        isOpen: false,
        message: '',
        severity: 'warning',
      };
    default: return state;
  }
};
