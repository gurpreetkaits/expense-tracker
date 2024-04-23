import "../assets/css/bottomnav.css";
import { FaPlus, FaHome, FaUser } from "react-icons/fa";
import { useState } from "react";

const BottomNavigationMenu = ({ showTransactionModal }) => {
  const [isPlusRotated, setIsPlusRotated] = useState(false);

  const handlePlusClick = () => {
    setIsPlusRotated(!isPlusRotated);
    showTransactionModal(); // Call your function to show the modal here
  };
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <span className="nav__name fs-4">
                    <FaHome />
                  </span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#" onClick={handlePlusClick} className="nav__link">
                  <span className="nav__name fs-4">
                    <FaPlus
                      className={`${isPlusRotated ? "rotate-plus" : "rotate-plus-back"}`}
                    />
                  </span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <span className="nav__name fs-4">
                    <FaUser />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default BottomNavigationMenu;
