import "../stylesheets/card.css";

const Card = ({ children, titleCard, descriptionCard, url }) => {
  return (
    <div className="card-container">
      <a href={url} target="_blank">
        <div className="icon-container">{children}</div>

        <div className="text-card">
          <h4>{titleCard}</h4>
          <span>{descriptionCard}</span>
        </div>
      </a>
    </div>
  );
};

export default Card;
