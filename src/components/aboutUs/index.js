// import "./index.css";
// import chevronRight from "../../assets/icons/chevron-right.svg";
// import siteBlackImg from "../../assets/images/Cloner Cubes Generative.png";

// const AboutUs = () => {
//   return (
//     <>
//       <div className="about-section container">
//         <div className="about-wrap">
//           <p className="about-title">
//             Мы создаем сайты и бэк-системы <br /> c акцентом на качество и
//             скорость.
//             <br />
//             Ваш проект — в надежных руках
//           </p>

//           <button className="about-btn">
//             Связаться c нами{" "}
//             <img className="chevron-img" src={chevronRight} alt="" />
//           </button>
//         </div>
//       </div>
//       <img className="siteBlackImg" src={siteBlackImg} alt="" />
//     </>
//   );
// };

// export default AboutUs;
//
//
//
//
//
//
//
//
//
//
//
//
//
//

import { useEffect } from "react";
import "./index.css";
import chevronRight from "../../assets/icons/chevron-right.svg";
import siteBlackImg from "../../assets/images/Cloner Cubes Generative.png";
import "aos/dist/aos.css"; // AOS CSS ni import qilish

const AboutUs = () => {
  return (
    <>
      <div className="about-section container">
        <div className="about-wrap">
          <p
            className="about-title"
            // data-aos=
            data-aos="fade-up "
            data-aos-duration="1000"
          >
            Мы создаем сайты и бэк-системы <br /> c акцентом на качество и
            скорость.
            <br />
            Ваш проект — в надежных руках
          </p>

          <button
            className="about-btn"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Связаться c нами{" "}
            <img className="chevron-img" src={chevronRight} alt="" />
          </button>
        </div>
      </div>
      <img
        className="siteBlackImg"
        src={siteBlackImg}
        alt=""
        data-aos="fade-right"
      />
    </>
  );
};

export default AboutUs;
