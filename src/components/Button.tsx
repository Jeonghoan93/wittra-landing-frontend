import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  black?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  black,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`

        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        shadow
        hover:opacity-90
        transition
        w-full
        font-bold
        border-[1pt]
        ${
          black
            ? "bg-gray-900 border-gray-900 text-white"
            : outline
            ? "bg-white border-black text-black"
            : "bg-blue-600 border-blue-600 text-white"
        }
        ${small ? "text-[11pt]" : "text-[11pt]"}
        ${small ? "py-[7pt]" : "py-[8pt]"}
      `}
    >
      {Icon && (
        <Icon
          size={20}
          className="
            absolute
            left-[14pt]
            top-[9pt]
          "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
