import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate("/")}
      className={"cursor-pointer font-extrabold text-[14pt]"}
    >
      WiTTRA
    </span>
  );
};

export default Logo;
