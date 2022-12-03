import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';
import './PokemonList.css';
import { StarButton } from './StarButton';

export const PokemonCard = ({ name, sprites, abilities, id, favorite }) => {
  const dispatch = useDispatch();
  const allAbilities = abilities.map(({ ability }) => ability.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={sprites.front_default} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={allAbilities} />
    </Card>
  );
};
