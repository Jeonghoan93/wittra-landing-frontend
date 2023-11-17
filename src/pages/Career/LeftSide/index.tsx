import HeaderCareer from "./Cards/HeaderCareer";

const LeftSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <HeaderCareer />
    </div>
  );
};

export default LeftSide;
