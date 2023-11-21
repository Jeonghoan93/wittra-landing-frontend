import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate("/")}
      className={"cursor-pointer font-extrabold text-[14pt]"}
    >
      GOTO
    </span>
  );
};

export default Logo;
