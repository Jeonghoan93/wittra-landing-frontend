import Container from "src/components/Container";
import LeftSide from "src/pages/Investor/BusinessPlan/LeftSide";
import RightSide from "src/pages/Investor/BusinessPlan/RightSide";

const BusinessPlan: React.FC = () => {
  return (
    <Container>
      <div
        className="
          py-5
          max-w-screen-xl 
          mx-auto
        "
      >
        <div className="flex flex-col gap-3">
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
          >
            <LeftSide />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BusinessPlan;
