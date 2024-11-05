import "./index.css";
import siteImg from "../../assets/images/site-logo.svg";

// const FooterMobile = () => {
//   return (
//     <div className="mobile footer container">
//       <div className="footer-wrap">
//         <ul className="footer-list">
//           <img src={siteImg} alt="" />
//           <li className="footer-item">Услуги</li>
//           <li className="footer-item">Проекты</li>
//           {/* </ul> */}
//           {/* <ul> */}
//           <li className="footer-item">О нас</li>
//           <li className="footer-item">Контакты </li>
//         </ul>
//         <p>© 2024 7UNIT</p>
//       </div>
//     </div>
//   );
// };

// export default FooterMobile;

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-folder">
        <a className="footer-link" href="#header">
          <img src={siteImg} alt="" />
        </a>
        <div className="footer-wrap">
          <ul className="footer-list">
            <li className="footer-item">Услуги</li>
            <li className="footer-item">Проекты</li>
            <li className="footer-item">О нас</li>
            <li className="footer-item">Контакты </li>
          </ul>
          <p className="footer-text">© 2024 7UNIT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
