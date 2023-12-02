import useContactUsModal from "src/hooks/useContactUsModal";

const WittraCard = () => {
  const contactUsModal = useContactUsModal();

  return (
    <div className="pt-6 p-3">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-10">
        <div className="flex flex-col items-start gap-5">
          <span className="font-extrabold text-[21pt] ">
            The only IoT solution you will ever need
          </span>

          <span className="font-normal text-[13pt] ">
            Ultimately providing a solid, reliable way to find out "where is my
            stuff, and what is it doing?"
          </span>

          <div className="flex flex-row gap-5 items-start">
            <span
              onClick={contactUsModal.onOpen}
              className="cursor-pointer p-4 border-[1px] rounded-lg bg-black text-white font-bold"
            >
              Contact us
            </span>
            <span className="cursor-pointer p-4 border-[1px] border-gray-900 rounded-lg font-bold">
              Read more
            </span>
          </div>
        </div>

        <section className="w-full h-[70vh] overflow-hidden relative">
          <img
            src={"/images/landing9.png"}
            className="object-cover h-full w-full"
            alt="Image"
          />
        </section>
      </div>
    </div>
  );
};

export default WittraCard;
