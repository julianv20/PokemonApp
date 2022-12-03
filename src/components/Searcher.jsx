import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';

export const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnchange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Input.Search
      placeholder="Buscar..."
      style={{ marginBottom: 10 }}
      onChange={handleOnchange}
    />
  );
};
