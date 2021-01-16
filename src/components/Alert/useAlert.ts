import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks/useSelector';
import { hideAlert } from '../../redux/alert/alertActions';

export function useAlert() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  function onClose() {
    dispatch(hideAlert());
  }

  return {
    alert,
    onClose,
  };
}
