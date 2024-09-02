import { Link } from "react-router-dom";

import "./Card.css";

export const Card = ({ id, title, price, address, date, src, alt }) => {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card--img">
        <img src={src} alt={alt} />
      </div>

      <h5 className="card--title">{title}</h5>

      <strong className="card--price">{price}</strong>

      <div className="card--desc-block">
        <span className="card--desc">{address}</span>
        <span className="card--desc">{date}</span>
      </div>
    </Link>
  );
};
