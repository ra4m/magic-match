import "./SingleCard.css";

import back from "/img/back.png";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          height={250}
          width={50}
          className="front"
          src={card.src}
          alt="card front"
        />
        <img
          height={250}
          width={50}
          className="back"
          src={back}
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
