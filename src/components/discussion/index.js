import "./index.css";
import empty from "../../assets/images/empty.png";

const Discussion = ({ onSubmit }) => {
  return (
    <div className="discussion-section" id="form">
      <div className="discussion-folder">
        <img
          src={empty}
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <div
          className="discussion-wrap"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="discussion-title">Обсудим ваш проект?</p>
          <p className="discussion-text">
            Заполните краткую информацию и мы <br />
            свяжемся с Вами в течении 1 рабочего дня
          </p>
          <form className="discussion-form" action="" onSubmit={onSubmit}>
            <label className="discussion-label" htmlFor="">
              <span>Имя</span>
              <input
                className="discussion-input"
                type="text"
                placeholder="Имя пользователя"
                required="on"
                // onChange={(e)=>{}}
              />
            </label>
            <label className="discussion-label" htmlFor="">
              <span>Название компании</span>
              <input
                className="discussion-input"
                type="text"
                placeholder="Название компании"
                required="on"
              />
            </label>
            <label className="discussion-label" htmlFor="">
              <span>Номер телефона</span>
              <input
                className="discussion-input"
                type="text"
                placeholder="+998   (00) 000 - 00 - 00"
                required="on"
              />
            </label>
            <label className="discussion-label" htmlFor="">
              <span>Пару слов чем можем помочь</span>
              <textarea
                className="discussion-input"
                type="text"
                placeholder="Оставьте нам сообщение..."
                required="on"
              />
            </label>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
