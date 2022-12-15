import Banner from "components/Banner/Banner";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Collection from "components/Collection/Collection";
import Newsletter from "components/Newsletter/Newsletter";
import Blog from "components/Blog/Blog";

import banner1 from './shared/assets/banner1.png';
import banner2 from './shared/assets/banner2.png';
import sansev from './/shared/assets/sansev.png';
import plants from './shared/assets/plants.png';
import tuplans from './shared/assets/tuplans.png';
import Footer from "components/Footer/Footer";

const bannerData = [
  {
    id: 1,
    name: 'Colorful Indoors',
    button: 'Shop these',
    img: banner1
  },
  {
    id: 2,
    name: 'Green Landscapes',
    button: 'Shop these',
    img: banner2
  }
];

const galleryData = [
  {
    id: 1,
    name: 'Green Landscapes',
    button: 'Shop these',
    img: plants
  },
  {
    id: 2,
    name: 'Green Landscapes',
    button: 'Shop these',
    img: sansev
  },
  {
    id: 3,
    name: 'Flowering Plants',
    button: 'Shop these',
    img: tuplans
  }
]

const App = () => {
  return (
    <div className="plant_application">
      <Header />
      <Hero />
      <Banner data={bannerData} />
      <Collection />
      <Newsletter />
      <Banner data={galleryData} />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
