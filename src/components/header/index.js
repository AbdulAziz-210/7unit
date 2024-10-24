// import assets from
//
//
//
import "./index.css";
import logoIcon from "../../assets/icons/logo.svg";
import hamburgerMenu from "../../assets/images/hamburger-menu.png";
import closeImg from "../../assets/icons/close-img.png";
import { useState } from "react";
import MobileHeader from "../mobile-header";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="header-main-wrap">
        <header className="site-header ">
          <div className="header-wrap container">
            <div className="pages">
              <img src={logoIcon} alt="" />
              <nav className="navbar">
                <ul className="pages-list">
                  <li>
                    <a href="/" className="pages-link">
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a href="/" className="pages-link">
                      Проекты
                    </a>
                  </li>
                  <li>
                    <a href="/" className="pages-link">
                      О нас
                    </a>
                  </li>
                  <li>
                    <a href="/" className="pages-link">
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <button className="cost">Узнать стоимость</button>
            <button className="burger-btn">
              {isOpen ? (
                <img
                  className="close-img"
                  src={closeImg}
                  alt=""
                  width={35}
                  height={35}
                  onClick={onClose}
                />
              ) : (
                <img
                  className="hamburger-menu"
                  src={hamburgerMenu}
                  alt=""
                  width={35}
                  height={35}
                  onClick={onOpen}
                />
              )}
            </button>
          </div>
        </header>
      </div>

      {isOpen && <MobileHeader />}
    </>
  );
};
export default Header;
