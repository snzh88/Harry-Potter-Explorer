import { useState } from 'react';

const MovingModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState('center'); // 'center', 'top', 'bottom', 'left', 'right'

  const handleConfirm = () => {
    // Циклически меняем позицию
    const positions = ['center', 'top', 'right', 'bottom', 'left'];
    const currentIndex = positions.indexOf(position);
    const nextIndex = (currentIndex + 1) % positions.length;
    setPosition(positions[nextIndex]);
  };

  if (!isOpen) return null;

  // Стили для разных позиций
  const positionStyles = {
    center: 'items-center justify-center',
    top: 'items-start justify-center pt-10',
    bottom: 'items-end justify-center pb-10',
    left: 'items-center justify-start pl-10',
    right: 'items-center justify-end pr-10'
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex ${positionStyles[position]} z-50`}>
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-xl transition-all duration-300">
        <h3 className="text-xl font-bold mb-4">Принятие на nFactorial Incubator 2025</h3>
        <p className="mb-6">Вы же примете меня на инкубатор 2025 года?</p>
        <div className="flex justify-end space-x-3">
        <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-red-600"
          >
            Нет
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 border bg-blue-600 text-white hover:bg-green-500 rounded"
          >
            Конечно, да ! (клянусь)
          </button>

        </div>
      </div>
    </div>
  );
};

export default MovingModal;




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