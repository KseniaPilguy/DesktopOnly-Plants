import Account from "shared/assets/Svg/Account";
import Heart from "shared/assets/Svg/Heart";
import Logo from "shared/assets/Svg/Logo";
import Search from "shared/assets/Svg/Search";
import Shopping from "shared/assets/Svg/Shopping";

                                        
const Header = () => {
 
  return (
    <div className='header_container'>
      <div className="logo_container">
        <Logo className='logo' />
      </div>
      <div className='links_container'>
        <p>About</p>
        <p>Home</p>
        <p>Shop</p>
        <p>Collection</p>
        <p>Blogs</p>
        <p>Contact</p>
      </div>
      <div className='icons_container'>
        <Search className='icon search' />
        <Account className='icon' />
        <Heart className='icon' />
        <Shopping className='icon shopping' />
      </div>
    </div>
  );
}

export default Header;
