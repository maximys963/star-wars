import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { hideAlert } from '../../redux/alert/alertActions';

export function useAlert() {
  const dispatch = useDispatch();
  const alert = useTypedSelector((state) => state.alert);

  function onClose() {
    dispatch(hideAlert());
  }

  return {
    alert,
    onClose,
  };
}
