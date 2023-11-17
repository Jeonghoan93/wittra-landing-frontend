import SimplePhotoCard from "src/components/SimplePhotoCard";

const RightSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <SimplePhotoCard img={"/images/office1.jpg"} text={"Stockholm Office"} />
      <SimplePhotoCard
        img={"/images/office2.jpg"}
        text={"Gothenbourg Office"}
      />
      <SimplePhotoCard img={"/images/office3.jpg"} text={"Oslo Office"} />
    </div>
  );
};

export default RightSide;
