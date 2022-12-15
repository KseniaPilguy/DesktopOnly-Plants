import Logo from "shared/assets/Svg/Logo";

           
const Footer = () => {
  
  return (
    <div className='footer_container'>
      <div className="logo_container">
        <Logo className='logo' />
      </div>
      <div className="link_item">
        <h4>Pages</h4>
        <p>Main Page</p>
        <p>Our Story</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>Privacy Policy</p>
      </div>
      <div className="link_item">
        <h4>Shop</h4>
        <p>All Collections</p>
        <p>Collection</p>
        <p>Product Page</p>
      </div>
      <div className="link_item">
        <h4>Follow us</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Pinterest</p>
        <p>Youtube</p>
      </div>
    </div>
  );
}

export default Footer;
