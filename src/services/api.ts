
// Basic API service for Harry Potter Explorer

// Base URL for the Harry Potter API
const API_BASE_URL = 'https://hp-api.onrender.com/api';

// Get all characters
export const getCharacters = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/characters`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

// Get characters by name
export const getCharacterByName = async (name: string) => {
  const characters = await getCharacters();
  return characters.find((char: any) => char.name === name);
};

// Get characters by house
export const getCharactersByHouse = async (house: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/characters/house/${house}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch characters for house: ${house}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching characters for house ${house}:`, error);
    return [];
  }
};


// House information
export const houses = [
  {
    id: 'gryffindor',
    name: 'Gryffindor',
    colors: 'Scarlet and Gold',
    color:'red',
    mascot: 'Lion',
    founder: 'Godric Gryffindor',
    description: 'Known for their bravery, courage, and determination.',
    imgSrc: '../../images/houses/gryffindor.png'
  },
  {
    id: 'slytherin',
    name: 'Slytherin',
    colors: 'Green and Silver',
    color:'green',
    mascot: 'Serpent',
    founder: 'Salazar Slytherin',
    description: 'Known for their ambition, cunning, and resourcefulness.',
    imgSrc: '../../images/houses/slytherin.png'
  },
  {
    id: 'hufflepuff',
    name: 'Hufflepuff',
    colors: 'Yellow and Black',
    color:'yellow',
    mascot: 'Badger',
    founder: 'Helga Hufflepuff',
    description: 'Known for their loyalty, patience, and hard work.',
    imgSrc: '../../images/houses/hufflepuff.png'
  },
  {
    id: 'ravenclaw',
    name: 'Ravenclaw',
    colors: 'Blue and Bronze',
    color:'blue',
    mascot: 'Eagle',
    founder: 'Rowena Ravenclaw',
    description: 'Known for their intelligence, wit, and wisdom.',
    imgSrc: '../../images/houses/ravenclaw.png'
  }
];

// Get house by id
export const getHouseById = (id: string) => {
  return houses.find(house => house.id.toLowerCase() === id.toLowerCase());
};
