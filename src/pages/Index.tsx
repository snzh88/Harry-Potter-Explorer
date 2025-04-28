
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('../../public/images/bg-hogwarts.jpg')] bg-cover bg-center">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-yellow-500 animate-float">
            Welcome to the Harry Potter World!
          </h1>
          
          <p className="text-xl mb-8 text-yellow-500 font-bold">
            Explore the magic world of Harry Potter discover fascinating characters,
            the noble houses of Hogwarts, powerful spells, and magical artifacts.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <ExploreCard
              title="Houses of Hogwarts" 
              description="Learn about the four houses and their unique traits."
              link="/houses"
            />
            <ExploreCard 
              title="Meet the Characters" 
              description="Discover wizards, witches and magical creatures."
              link="/characters"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ExploreCardProps {
  title: string;
  description: string;
  link: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ title, description, link }) => {
  return (
    <Link 
      to={link}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs w-full"
    >
      <h3 className="text-xl font-bold mb-3 text-sky-700">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <span className="text-black font-semibold">Explore &rarr;</span>
    </Link>
  );
};

export default Index;




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