import Navbar from '../components/Navbar';

type Video = {
    src: string;   
    link: string;
}


const Memes = () => {
    const videos: Video[] = [
        {src: "../../public/meme-videos/draco1.mp4" , link: "https://vm.tiktok.com/ZMBcLkRox/" },
        {src: "../../public/meme-videos/draco2.mp4", link: 'https://vm.tiktok.com/ZMBcLh6Ly/'},
        {src: "../../public/meme-videos/voland1.mp4", link: 'https://vm.tiktok.com/ZMBc8sj3T/'},
        {src: "../../public/meme-videos/harry2.mp4", link: 'https://vm.tiktok.com/ZMBc8EpnY/'},
        {src: "../../public/meme-videos/harry3.mp4", link: 'https://vm.tiktok.com/ZMBcLN4Bg/'},
        {src: "../../public/meme-videos/snape1.mp4", link: 'https://vm.tiktok.com/ZMBcLu6GH/'},
        {src: "../../public/meme-videos/harry5.mp4", link: 'https://vm.tiktok.com/ZMBcFyFaj/'},
        {src: "../../public/meme-videos/harry6.mp4", link: 'https://vm.tiktok.com/ZMBcFFRmy/'},
        {src: "../../public/meme-videos/harry4.mp4", link: 'https://vm.tiktok.com/ZMBcFPEds/'},
        {src: "../../public/meme-videos/snape2.mp4", link: 'https://vm.tiktok.com/ZMBcFNpMt/'},
        {src: "../../public/meme-videos/harry1.mp4", link: 'https://vm.tiktok.com/ZMBc83oW1/'},
        {src: "../../public/meme-videos/voland2.mp4", link: 'https://vm.tiktok.com/ZMBcLY5xt/'},
        /*
        {src: '', link: ''},

        "../../public/meme-videos/draco2.mp4",
        */
    ];
    const links = [

    ];

//displays meme videos from tiktok
    return (
        <div className="min-h-screen bg-black  bg-center  ">
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8 text-white text-center">
                    Memes from Harry Potter World
                </h1>
                <p className="text-lg mb-10 text-white max-w-3xl mx-auto text-center">
                    A collection of memes that capture the humor and magic of the HP world
                    <br></br>(was selected by Sanzhik).
                </p>
                <div className="flex flex-row flex-wrap:wrap gap-3 flex-wrap p-4 items-center justify-center">
                {videos.map((video, index) => (
                    <div key={index} className="flex flex-col items-center">
                    <video
                        controls
                        src={video.src}
                        className="w-full max-w-md rounded shadow-lg"
                    >
                        Ваш браузер не поддерживает видео.
                    </video>
                    <p className="mt-2 text-center">{index + 1}. Original video: 
                        <a className='hover:text-blue-500' target='_blank' href={video.link}> ~link</a>
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </div>    
    )
}

export default Memes;




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