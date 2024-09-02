import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to={`/`} className="header-logo">
            <img src="/image/logo.svg" alt="Logo" />
            <span>Abito</span>
          </Link>

          <div className="header-control">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>

          <div className="header-burger">
            <img src="/image/burger.svg" alt="Burger" />
          </div>
        </div>
      </div>
    </header>
  );
};
