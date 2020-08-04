import React from 'react';
import PropTypes from 'prop-types';


function List({ characters }) {
  const charactersElements = characters.map(character => (
    <li key={character.name}>
      <h3> {character.name} </h3>
      <img src={character.image} alt={character.name} />
    </li>
  ));
  return (
    <div>
      <ul>
        {charactersElements}
      </ul>
      
    </div>
  );
}

List.propTypes = {
  characters: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default List;
