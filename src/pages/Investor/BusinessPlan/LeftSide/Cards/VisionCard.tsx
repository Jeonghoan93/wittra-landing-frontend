const VisionCard = () => {
  return (
    <section className="w-full h-[40vh] overflow-hidden border-[1px] border-neutral-200 shadow relative rounded-lg">
      <section className="w-full h-[40vh] overflow-hidden relative">
        <img
          src={"/images/landing.png"}
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
        <div className={"absolute inset-0 bg-black opacity-50"}></div>{" "}
        {/* This div acts as the overlay */}
      </section>

      <section
        style={{ width: "100%", height: "100%", top: 0, left: 0 }}
        className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
      >
        <div className="text-white flex flex-col items-center text-center gap-2">
          <span className="text-[15pt] text-gray-50 font-extrabold">
            Vision
          </span>
          <span className="text-[10pt] font-bold px-3 text-gray-100">
            Connecting Lives, Advancing Business
          </span>
          <span
            onClick={() => alert("Coming soon!")}
            className="cursor-pointer border-[1pt] text-[10pt] font-semibold bg-white text-gray-800 rounded-xl py-2 px-4 border-gray-50 shadow"
          >
            Read more
          </span>
        </div>
      </section>
    </section>
  );
};

export default VisionCard;
