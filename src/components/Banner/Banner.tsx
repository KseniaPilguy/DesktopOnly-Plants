import React from 'react';

interface BannerDataI {
  id?: number,
  name: string,
  button: string,
  img: any
}

interface BannerI {
  data: BannerDataI[]
}

const Banner: React.FC<BannerI> = ({ data }) => {
 
  return (
    <div className='banner_container'>
      {data.map((banner: BannerDataI) => {
        return (
        <div className='banner_item'>
          <img src={banner.img} alt='banner' />
          <div className='text_wrapper'>
            <h3>{banner.name}</h3>
            <p>{banner.button}</p>
          </div>
        </div>
        )
      })}
    </div>
  );
}

export default Banner;
