import { Suspense, lazy } from "react";
import LineContainer from "src/components/LineContainer";

const Map = lazy(() => import("src/components/Map"));

const LocationCard = () => {
  return (
    <LineContainer>
      <section className="flex flex-col gap-3">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Location</h2>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Map center={[59.3293, 18.0686]} />
        </Suspense>
      </section>
    </LineContainer>
  );
};

export default LocationCard;
