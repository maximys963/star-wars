import { createSelectorHook } from 'react-redux';
import { RootState } from '../store/store';

export const useSelector = createSelectorHook<RootState>();
