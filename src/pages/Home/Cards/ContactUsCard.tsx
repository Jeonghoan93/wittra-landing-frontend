const ContactUsCard = () => {
  return (
    <section className="w-full h-[40vh] overflow-hidden border-[1px] border-neutral-200 shadow relative rounded-lg">
      <section className="w-full items-center justify-center flex flex-col gap-4 z-1">
        <div className="p-3 text-white flex flex-col items-center text-center gap-2">
          <span className="cursor-pointer text-[15pt] text-gray-900 font-extrabold">
            Contact us
          </span>
          <span className="text-[11pt] font-bold px-3 text-gray-800">
            We would love to discuss how WiTTRA can help your business!
          </span>
        </div>
      </section>
    </section>
  );
};

export default ContactUsCard;
