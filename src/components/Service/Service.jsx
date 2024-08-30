import "./Service.css";

export const Service = ({ src, alt, title, text }) => {
  return (
    <div className="content-side__list-item">
      <img src={src} alt={alt} className="content-side__list-item--img" />
      <h5 className="content-side__list-item--title">{title}</h5>
      <p className="content-side__list-item--text">{text}</p>
    </div>
  );
};
