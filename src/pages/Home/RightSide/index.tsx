import ConsultationCard from "./Cards/ConsultationCard";
import ReadCard from "./Cards/ReadCard";

const RightSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <ConsultationCard />
      <ReadCard />
    </div>
  );
};

export default RightSide;
