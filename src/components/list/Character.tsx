import * as React from 'react';
import { Link } from 'react-router-dom';

interface AppProps {
  characters: { name: string, image: string }[]
}

const Character: React.FunctionComponent<AppProps> = ({ characters }) => {
  return (
    <ul>
      {characters.map(character => (
        <li key={character.name}>
          <Link to={`/character/${character.name}`}>
            <h1>{character.name}</h1>
          </Link>
          <img src={character.image} />
        </li>
      ))}
    </ul>
  )
}

export default Character;