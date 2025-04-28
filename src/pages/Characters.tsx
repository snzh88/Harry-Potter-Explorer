
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CharacterCard from '../components/CharacterCard';
import { getCharacters, getCharactersByHouse } from '../services/api';

interface Character {
  id: string;
  name: string;
  house: string;
  image: string;
  patronus: string;
}

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 8;
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const houseFilter = queryParams.get('house');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let data: Character[];
      
      if (houseFilter) {
        data = await getCharactersByHouse(houseFilter);
      } else {
        data = await getCharacters();
      }
      
      setCharacters(data);
      setLoading(false);
    };
    
    fetchData();
  }, [houseFilter]);

  // Filter characters based on search term
  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current characters for pagination
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 bg-[url('../../public/images/anime-style.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-4xl font-bold mb-8 text-orange-800 text-center">
          Characters
        </h1>
        
        {houseFilter && (
          <div className="mb-6 text-center">
            <p className="text-lg">
              Showing characters from <span className="font-bold capitalize">{houseFilter}</span>
            </p>
          </div>
        )}
        
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        {loading ? (
          <div className="text-center py-8">
            <p className="text-xl">Loading characters...</p>
          </div>
        ) : currentCharacters.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-xl text-white">No characters found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                house={character.house}
                image={character.image}
                patronus={character.patronus}
              />
            ))}
          </div>
        )}
      


      
      {/* Pagination */}
      {filteredCharacters.length > charactersPerPage && (
        <div className="flex justify-center items-center mt-8 space-x-2">
        {/* Кнопка "Назад" */}
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white hover:bg-yellow-100'
            } border border-yellow-500`}
          >
            &lt;
          </button>

        {/* Первая страница */}
        {currentPage > 5 && (
            <>
              <button
                onClick={() => paginate(1)}
                className="px-3 py-1 rounded bg-white text-yellow-500 border border-yellow-500 hover:bg-yellow-100"
              >
                1
              </button>
              {currentPage > 6 && <span className="px-1">...</span>}
            </>
          )}

        {/* Основной диапазон страниц */}
          {Array.from({ length: Math.min(10, Math.ceil(filteredCharacters.length / charactersPerPage)) }).map((_, index) => {
            const pageNumber = currentPage <= 5 
              ? index + 1 
              : currentPage >= Math.ceil(filteredCharacters.length / charactersPerPage) - 4 
                ? Math.ceil(filteredCharacters.length / charactersPerPage) - 9 + index 
                : currentPage - 5 + index;

            if (pageNumber < 1 || pageNumber > Math.ceil(filteredCharacters.length / charactersPerPage)) return null;

            return (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                className={`px-3 py-1 rounded ${
                  currentPage === pageNumber ? 'bg-yellow-500 text-white' : 'bg-white text-yellow-500 hover:bg-yellow-100'
                } border border-yellow-500`}
              >
                {pageNumber}
              </button>
            );
          })}

        {/* Последняя страница */}
          {currentPage < Math.ceil(filteredCharacters.length / charactersPerPage) - 4 && (
            <>
              {currentPage < Math.ceil(filteredCharacters.length / charactersPerPage) - 5 && <span className="px-1">...</span>}
              <button
                onClick={() => paginate(Math.ceil(filteredCharacters.length / charactersPerPage))}
                className="px-3 py-1 rounded bg-white text-yellow-500 border border-yellow-500 hover:bg-yellow-100"
              >
                {Math.ceil(filteredCharacters.length / charactersPerPage)}
              </button>
            </>
          )}

          {/* Кнопка "Вперед" */}
          <button
            onClick={() => paginate(Math.min(Math.ceil(filteredCharacters.length / charactersPerPage), currentPage + 1))}
            disabled={currentPage === Math.ceil(filteredCharacters.length / charactersPerPage)}
            className={`px-3 py-1 rounded ${
              currentPage === Math.ceil(filteredCharacters.length / charactersPerPage) ? 'bg-gray-300 cursor-not-allowed' : 'bg-white hover:bg-yellow-100'
            } border border-yellow-500`}
          >
            &gt;
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Characters;



/*

       Моя любовь к nFactorial :                                      
                                                  
        :~!?JJJJ?7~:          :~7?JJJJ?!~:        
     .~JPPPPPPPPPPPPY7:    :7YPPPPPPPPPPPPJ~.     
    ^YPPPPPPPPPPPPPPPPP?..?PPPPPPPPPPPPPPPPPY^    
   ~PPPPPPPPPPPPPPPPPPPP55PPPPPPPPPPPPPPPPPPPP~   
  .5PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5.  
  ^PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP^  
  ^PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP^  
  .5PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5.  
   ?PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP?   
   .5PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5.   
    :YPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPY:    
     .7PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7.     
       :?PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP?:       
         :75PPPPPPPPPPPPPPPPPPPPPPPPPP57:         
           .!YPPPPPPPPPPPPPPPPPPPPPPY!.           
              ^?PPPPPPPPPPPPPPPPPP?^              
                :75PPPPPPPPPPPP57:                
                  .~JPPPPPPPPJ~.                  
                     ^?PPPP?^                     
                       :77:                       
                                               
*/