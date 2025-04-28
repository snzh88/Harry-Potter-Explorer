import { Link } from 'react-router-dom';

const houseColorMap = {
  red: 'text-red-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500',
  blue: 'text-blue-500',
};

const HouseCard = ({
  id,
  name,
  colors,
  color,
  mascot,
  founder,
  description,
  imgSrc
}) => { 
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <h3 className={`${houseColorMap[color] || 'text-gray-500'} text-2xl font-bold mb-2`}>
          {name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <p><span className="font-semibold">Colors:</span> {colors}</p>
          <p><span className="font-semibold">Symbol:</span> {mascot}</p>
          <p><span className="font-semibold">Founder:</span> {founder}</p>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="font-semibold">
          Crest:
          <img src={imgSrc} alt="housesPics" />
        </div>
        <Link 
          to={`/characters?house=${id}`} 
          className="inline-block text-secondary hover:underline"
        >
          View House Members &rarr;
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;
