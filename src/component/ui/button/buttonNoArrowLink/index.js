import Link from "next/link";
import classes from "../ButtonNoArrow.module.css";
const ButtonNoArrowLink = ({
  btnText,
  link = "",
  btnStyle = "",
  triggeredHover,
  color = 1,
  type,
}) => {
  return (
    <Link
      href={link !== "" ? link : ""}
      prefetch={false}
      target={type === "blank" ? "_blank" : ""}
    >
      <button
        className={`${classes["cs-button-no-arrow"]} ${
          color === 1 ? classes["cs-blue"] : classes["cs-white"]
        } ${btnStyle} ${triggeredHover ? classes.hovered : ""}`}
      >
        {btnText}
      </button>
    </Link>
  );
};

export default ButtonNoArrowLink;
