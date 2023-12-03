interface TextItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const TextItem: React.FC<TextItemProps> = ({ children, onClick }) => {
  return (
    <span
      className="cursor-pointer text-[11pt] font-semibold"
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default TextItem;
