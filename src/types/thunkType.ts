import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../redux/store/store';

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >
