import { Link } from 'react-router-dom';
import React from 'react';

interface CharacterCardProps {
  name: string;
  house: string;
  image: string;
  patronus?: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  house,
  image,
  patronus
}) => {

  const lowerName = name.toLowerCase();

  const imageUrl = (() => {
    switch (true) {
      case lowerName.includes('hermione'):
        return "/public/images/asel.png";
      case lowerName.includes('harry potter'): 
        return "/public/images/armansu.png";
      case lowerName.includes('ron'):
        return "/public/images/igor.jpg";
      default:
        return image || 'https://placehold.co/200x300/png?text=' + name.charAt(0);
    }
  })();
  

  const patronusText = (() => {
    switch (true) {
      case lowerName.includes('hermione'):
        return 'chaban';
      case lowerName.includes('harry potter'):
        return 'nFactorial';
      case lowerName.includes('ron'):
        return 'Math';
      default:
        return patronus || 'Unknown';
    }
  }
  )();
  


  return (
    <div className={`${name} bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}>
      <div className="p-4 flex flex-col items-center">
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-200">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // If image fails to load, replace with placeholder
              (e.target as HTMLImageElement).src = `https://placehold.co/200x300/png?text=${name.charAt(0)}`;
            }}
          />
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
        
        <div className="text-sm text-gray-600 text-center">
          <p className="mb-1">House: {house || 'Unknown'}</p>
          <p>Patronus: {patronusText || "unknown"}</p>



          <Link className='text-blue-700' to="/About" state={{id : name}}><p>More about character...</p></Link>



        </div>
      </div>
    </div>
  );
};

export default CharacterCard;


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