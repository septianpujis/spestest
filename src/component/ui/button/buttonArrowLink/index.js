import Link from "next/link";
import classes from "./ButtonArrow.module.css";
const ButtonArrowLink = ({
  btnText,
  link = "",
  btnStyle = "",
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
        className={`${classes["cs-button-arrow"]} ${
          color === 1 ? classes["cs-blue"] : classes["cs-white"]
        } ${btnStyle}`}
      >
        {btnText}
      </button>
    </Link>
  );
};

export default ButtonArrowLink;
