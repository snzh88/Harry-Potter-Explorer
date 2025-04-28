import { Link } from 'react-router-dom';
import React from 'react';

interface CharacterCardProps {
  name: string;
  house: string;
  image: string;
  patronus?: string;

  gender?: string;
  dateOfBirth: string;
  wand?: {
    wood: string;
    core: string;
    length: string;
  };
  hairColour?: string;
  eyeColour?: string;
}

const CharacterPage: React.FC<CharacterCardProps> = ({
  name="",
  house,
  image,
  patronus,
  gender,
  dateOfBirth,
  wand,
  hairColour,
  eyeColour
}) => {

  const lowerName:string = name.toLowerCase();

  const imageUrl = (() => {
    switch (true) {
      case lowerName.includes('hermione'):
        return "public/images/Asel.png";
      case lowerName.includes('harry potter'):
        return "public/images/Armansu.png";
      case lowerName.includes('ron'):
        return "public/images/igor.jpg";
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
    <div className=" w-[400px] flex items-center justify-center bg-gray-800 shadow-md overflow-hidden  transition-shadow">
      <div className="p-6 flex flex-col items-center">
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
        
        <h3 className="text-lg font-semibold text-white mb-2 text-center">{name}</h3>
        <h4 className="text-white">Date of birth: {dateOfBirth || 'Unknown'}</h4>
        <div className="text-sm text-white text-center">
          <p className="mb-1">House: {house || 'Unknown'}</p>
          <p>Patronus: {patronusText || "Unknown"}</p>
          <p>Gender: {gender || 'Unknown'}</p>
          <p>Eye colour: {eyeColour || 'Unknown'}</p>
          <p>Hair colour: {hairColour }</p>
          <p>Wand: {wand?.wood} with {wand?.core} core, {wand?.length} inches</p>
          <Link className="text-blue-400 " to="/Characters">Back to characters {"->"}</Link>

        </div>
      </div>
    </div>
  );
};


export default CharacterPage;

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