import banner from '../assets/food-banner.jpg';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Street Food Restaurant</h1>
      <div className="header-banner">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Header;
