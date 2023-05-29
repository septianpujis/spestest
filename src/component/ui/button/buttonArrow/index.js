import classes from "./ButtonArrow.module.css";
const ButtonArrow = ({
  btnText,
  btnStyle = "",
  color = 1,
  clickEvent,
  type,
}) => {
  return (
    <button
      className={`${classes["cs-button-arrow"]} ${
        color === 1 ? classes["cs-blue"] : classes["cs-white"]
      } ${btnStyle}`}
      type={type}
      onClick={clickEvent !== undefined ? clickEvent : undefined}
    >
      {btnText}
    </button>
  );
};

export default ButtonArrow;
