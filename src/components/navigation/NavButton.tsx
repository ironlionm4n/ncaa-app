import { Link } from "react-router-dom";

const NavButton = ({
  linkAddress,
  title,
}: {
  linkAddress: string;
  title: string;
}) => {
  return <Link to={linkAddress}>{title}</Link>;
};

export default NavButton;
