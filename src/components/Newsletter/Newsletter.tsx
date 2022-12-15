import PlantBlock from "shared/assets/Svg/PlantBlock";

const Newsletter = () => {
 
  return (
    <div className='newsletter_container'>
      <PlantBlock className="background_wrapper" />
      <h2>Get a FREE Plant Care Guide <br /> by joining our Newsletter</h2>
      <div className="input_container">
        <input placeholder="Enter Your Email Address Here" />
        <div className="button">Subscribe</div>
      </div>
    </div>
  );
}

export default Newsletter;
