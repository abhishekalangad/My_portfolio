import FrappeImg from "../images/Frappe_Icon.png";

const FrappeIcon = ({ size = 24 }) => {
  return (
    <img
      src={FrappeImg}
      alt="Frappe Framework"
      width={size}
      height={size}
      style={{
        display: "inline-block",
        objectFit: "contain",
      }}
    />
  );
};

export default FrappeIcon;
