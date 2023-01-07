import "../stylesheets/mainCard.css";

const MainCard = ({ titleMain, descriptionMain }) => {
  return (
    <div className="main-card-container">
      <div className="me-picture"></div>
      <div className="main-text">
        <h4>{titleMain}</h4>
        <span>{descriptionMain}</span>
      </div>
    </div>
  );
};

export default MainCard;
