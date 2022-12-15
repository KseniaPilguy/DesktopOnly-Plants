import PlantElement3 from 'shared/assets/Svg/PlantElement3';
import PlantElement4 from 'shared/assets/Svg/PlantElement4';
import cane from '../../shared/assets/cane.png';
import ficus from '../../shared/assets/ficus.png';
import vinca from '../../shared/assets/vinca.png';

const Collection = () => {
 
  return (
    <div className='collection_container'>
      <PlantElement3 className='background_icon right' />
      <PlantElement4 className='background_icon left' />
      <div className='information_block'>
        <h3>most popular</h3>
        <h2>Indoor Air Purifier Plants <br /> for your Living Space</h2>
        <p>Scientific research indicates that plants communicate
          with insects, animals, human beings and other plants in order to
          keep themselves alive and safe. Evidence also reveals that
          plants are telling us how to achieve health and wholeness for
          humanity and the earth herself.</p>
        <a>View all Products</a>
      </div>
      <div className='plants_collection_container'>
        <div className='plant_collection_item'>
          <div className='image'>
            <img src={cane} alt='Cane plants' />
          </div>
          
          <h5>Cane plants</h5>
        </div>
        <div className='plant_collection_item'>
          <div className='image'>
            <img src={ficus} alt='Ficus plants' />
          </div>
          <h5>Ficus plants</h5>
        </div>
        <div className='plant_collection_item'>
          <div className='image'>
            <img src={vinca} alt='Vinca vines' />
          </div>
          <h5>Vinca vines</h5>
        </div>
      </div>
    </div>
  );
}

export default Collection;
