import PlantElement from "shared/assets/Svg/PlantElement";
import MainPlant from "shared/assets/Svg/MainPlant";
import PlantElement2 from "shared/assets/Svg/PlantElement2";

const heroData = [
  {
    id: 1,
    title: 'Free delivery',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    id: 2,
    title: 'Wide Variety',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    id: 3,
    title: 'Lanscaping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    id: 4,
    title: 'Big Offers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    id: 5,
    title: '100% Secure Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  },
  {
    id: 6,
    title: 'Quality Guarantee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.'
  }
];
                                        
const Hero = () => {
  
 
  return (
    <div className='hero_container'>
      <div className='hero_items_container'>
        {heroData.slice(0,3).map((data, index) => (
          <div className='hero_item' key={index}>
            <div className='hero_item_text'>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
            <div className='circle'>{data.id}</div>
          </div>
        ))}
      </div>
      <div className=''>
        <MainPlant />
      </div>
      <div className='hero_items_container'>
        {heroData.slice(3).map((data, index) => (
          <div className='hero_item' key={index}>
            <div className='circle'>{data.id}</div>
            <div className='hero_item_text'>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
        </div>
        ))}
      </div>
      <PlantElement className='background-icon right' />
      <PlantElement2 className='background-icon left' />
    </div>
  );
}

export default Hero;
