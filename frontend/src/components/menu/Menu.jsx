import menu1 from "../../assets/menu-1.png";
import menu2 from "../../assets/menu-2.png";
import menu3 from "../../assets/menu-3.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-heading">Our Menu</h1>
      <div className="menu-sections">
        <div className="menu-section">
          <img src={menu1} alt="Menu Section 1" />
        </div>
        <div className="menu-section">
          <img src={menu2} alt="Menu Section 2" />
        </div>
        <div className="menu-section">
          <img src={menu3} alt="Menu Section 3" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
