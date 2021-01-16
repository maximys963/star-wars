import { createSelectorHook } from 'react-redux';
import { RootState } from '../redux/store/store';

export const useSelector = createSelectorHook<RootState>();
