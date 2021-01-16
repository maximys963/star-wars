export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export interface IShowAlertAction {
    type: typeof SHOW_ALERT,
    message: string,
    severity: 'error' | 'warning' | 'info' | 'success'
}

export interface IHideAlertAction {
    type: typeof HIDE_ALERT
}

export type alertActionTypes = IShowAlertAction | IHideAlertAction;
