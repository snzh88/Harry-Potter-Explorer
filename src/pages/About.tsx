import React from 'react';
import {getCharacters} from "../services/api";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CharacterPage from '../components/CharacterPage';
/*
Добавь возможность открыть карточку персонажа для просмотра 
подробной информации 
(дом, дата рождения, магическая палочка, и т.д.). 
*/

interface Character {
    id: string;
    name: string;
    house: string;
    image: string;
    patronus: string;
    gender?: string;
    dateOfBirth?: string;
    wand?: {
        wood: string;
        core: string;
        length: string;
    };
    hairColour?: string;
    eyeColour?: string;
}

let current_id: string;
let current_name: string;
let current_house: string;
let current_image: string;
let current_patronus: string;
let current_dateOfBirth: string;
let current_wand: {
    wood: string;
    core: string;
    length: string;
};
let current_gender: string;
let current_hairColour: string;
let current_eyeColour: string;

const About = () => {

    const [characters, setCharacters] = React.useState<Character[]>([]);
    const [loading, setLoading] = React.useState(true);
    
    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            const data = await getCharacters();
            setCharacters(data);
            setLoading(false);
        };
        fetchCharacters();
    }, []);

    const location = useLocation();
    const { id } = location.state || {};  // Получаем значение 'id'
    let myId: string = id as string;



    characters.forEach((character) => {
        if (character.name === myId) {
            current_id = character.id;
            current_name = character.name;
            current_house = character.house;
            current_image = character.image;
            current_patronus = character.patronus;
            current_dateOfBirth = character.dateOfBirth;
            current_wand = character.wand;
            current_gender = character.gender;
            current_hairColour = character.hairColour;
            current_eyeColour = character.eyeColour;
        }
    });

    return (
        <div className="min-h-screen bg-black flex justify-center items-center bg-[url('../../public/images/bg-moving-stars.gif')] bg-cover">
            <CharacterPage
            key={current_id}
            name={current_name}
            wand={current_wand}
            dateOfBirth={current_dateOfBirth}
            house={current_house}
            image={current_image}
            patronus={current_patronus}
            gender={current_gender}
            hairColour={current_hairColour}
            eyeColour={current_eyeColour}
          />
        </div>
      );
    };

export default About;


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

/*  Примите в Инкубатор nFactorial,пожалуйста!
    Я не знаю, что делать с этой любовью к nFactorial,
    но я знаю, что она не проходит.

    
                          :^^^.:^^^.                        
                         :!~~~!!~~~~.                       
                         ~!~^^7!^^~7^                       
                        .!!^^^!~^^^7~                       
                        :7!^^^7!^^^77.                      
                        ^7~^^^7!^^^!7.                      
                        ~7~^^^?!^^^!?^                      
                       .!7^^^~?!^^^~?~                      
                       :7!^^^~?7^^^~?7                      
                      .!7!^^^~J7^^^~7?^                     
                     .!?7~^^^~Y?^^^^!??^                    
                     ^?7!^^^^~Y?^^^^~7??.                   
                     7?!~^^^^~Y?^^^^^~7J^                   
                    :?7!^^^^^~Y?^^^^^~7?7                   
                    ~?!~^^^^^!Y?~^^^^~!7?.                  
                   .77!~^^^^^!5J~^^^^^~7?~                  
                   ~7!~^^^^^~!5J~^^^^^~!77:                 
                 .~7!~~^^^^^~!5J~^^^^^~~!77^                
                :!7!~~^^^^^^~75J~^^^^^^~!!77~.              
            :~^~77!~~~^^^^^~!?5J!~^^^^^~~~!!77!7~:          
       .^!JPGJ7!!~~~~~^^^^~!7JPY7!~~^^~~~~~!!!7JGG5J!:      
   .^!JPGGGP5?!~~~~~^^~~~~!7?YP5?7!~~~~~~~~~~!!J5PPGGG5J!:. 
^!JPGGGP55YYJJ?~~^^^^~~!!7??JJ~!J??7!!~~~~~~~~?JYYY55PGGGP5J
GGGPP55YYJJJ???7~^^^^~!7?J!~:.  .^~7?7!!~~^~~7??JJJYY555PPPP
P555YYJJJJ???77777!~~!7?5Y         :PJ7!!~~!77????JJJYYY555P
5YYYJJJJ????7777???JJY5GP^          7GPYJ??????????JJJJYYY55
YYJJJJ???????????JJ5GB#Y.            ^P#G5YJ????????JJJJYYYY
JJJJJ??????????JJYPGBB!               .J#GPYJJ????????JJJJYY
*/