import classes from "../ButtonPlay.module.css";
const ButtonPlay = ({ btnText, btnStyle = "", clickEvent, type }) => {
  return (
    <button
      className={`${classes["cs-button-play"]} ${btnStyle}`}
      type={type}
      onClick={clickEvent !== undefined ? clickEvent : undefined}
    >
      {btnText}
    </button>
  );
};

export default ButtonPlay;
