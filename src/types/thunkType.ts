import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
// import { RootState } from '../redux/store/store';

export type AppThunk = ThunkAction<
    void,
    {},
    {},
    AnyAction
    >
