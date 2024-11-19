import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './componentes/Cards';

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchAllCharacters = async () => {
    try {
      let allCharacters = [];
      let pagina = 1;
      let siguiente_pagina = true;

      while (siguiente_pagina) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?pagina=${pagina}`);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        siguiente_pagina = data.info.next !== null;
        pagina += 1;
      }

      setCharacters(allCharacters);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <div className='app-container'>
      <h1 className='app-title'>The Rick and Morty</h1>
      <div className="app-row">
        <div className='character-list d-flex flex-wrap'>
          {characters.map((character) => (
            <div className='character-card' key={character.id}>
              <Cards 
                Foto={character.image}
                Nombre={character.name} 
                Estado={character.status} 
                Especie={character.species} 
                Genero={character.gender} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
