import LeftSide from "./LeftSide";
import WelcomeCard from "./Cards/WelcomeCard";
import RightSide from "./RightSide";
import Container from "src/components/Container";
import AviationCard from "./Cards/AviationCard";
import HeavyIndustryCard from "./Cards/HeavyIndustryCard";
import LogisticsCard from "./Cards/LogisticsCard";
import PropTechCard from "./Cards/PropTechCard";
import WittraCard from "./Cards/WittraCard";

const Home: React.FC = () => {
  return (
    <Container>
      <div
        className="
          pb-10
          max-w-screen-xl 
          mx-auto
        "
      >
        <WelcomeCard />
        <div className="flex flex-col gap-4 pt-4 md:flex-row">
          <AviationCard />
          <HeavyIndustryCard />
          <LogisticsCard />
          <PropTechCard />
        </div>
        <div className="pt-4 flex flex-col gap-4">
          <div
            className="
              grid 
              grid-cols-1
              md:grid-cols-7 
              md:gap-1
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
        <WittraCard />
      </div>
    </Container>
  );
};

export default Home;
