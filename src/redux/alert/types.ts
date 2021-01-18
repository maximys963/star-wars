export interface IShowAlert {
    message: string,
    severity: 'error' | 'warning' | 'info' | 'success'
}

export interface IAlertState extends IShowAlert{
    isOpen: boolean,
}
