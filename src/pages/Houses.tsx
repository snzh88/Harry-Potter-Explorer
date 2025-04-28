import Navbar from '../components/Navbar';
import HouseCard from '../components/HouseCard';
import { houses } from '../services/api';

const Houses = () => {
  return (
    <div className="min-h-screen bg-[url('../../public/images/houses.jpg')] bg-cover bg-center bg-no-repeat ">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Houses of Hogwarts
        </h1>
        
        <p className="text-lg mb-10 text-white max-w-3xl mx-auto text-center">
          Hogwarts School of Witchcraft and Wizardry is divided into four houses, 
          each with its own unique history, values, and characteristics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {houses.map((house) => (
            <HouseCard
              key={house.id}
              id={house.id}
              color={house.color}
              name={house.name}
              colors={house.colors}
              mascot={house.mascot}
              founder={house.founder}
              description={house.description}
              imgSrc={house.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Houses;





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