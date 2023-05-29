import classes from "../ButtonNoArrow.module.css";
const ButtonNoArrow = ({
  btnText,
  btnStyle = "",
  color = 1,
  clickEvent,
  type,
  triggeredHover,
}) => {
  return (
    <button
      className={`${classes["cs-button-no-arrow"]} ${
        color === 1 ? classes["cs-blue"] : classes["cs-white"]
      } ${triggeredHover ? classes.hovered : ""} ${btnStyle}`}
      type={type}
      onClick={clickEvent !== undefined ? clickEvent : undefined}
    >
      {btnText}
    </button>
  );
};

export default ButtonNoArrow;
