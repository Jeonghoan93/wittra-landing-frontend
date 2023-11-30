const WittraCard = () => {
  return (
    <div className="pt-6 p-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-start gap-4">
          <span className="font-extrabold text-[21pt] ">
            Alla dina medlemskort på ett ställe.
          </span>

          <span className="font-normal text-[13pt] ">
            Lägg till dina medlemskort i Klarna-appen så går du aldrig miste om
            några poäng från dina favoritbutiker. Finns i den senaste versionen
            av Klarna-appen.
          </span>

          <div className="flex flex-row gap-5 items-start">
            <span className="p-4 border-[1px] rounded-lg bg-black text-white font-bold">
              Kom igång
            </span>
            <span className="p-4 border-[1px] border-gray-900 rounded-lg font-bold">
              Läs mer
            </span>
          </div>
        </div>

        <section className="w-full h-[70vh] overflow-hidden relative">
          <img
            src={"/images/goto.avif"}
            style={{ width: "100%", height: "100%" }}
            className="object-cover w-full"
            alt="Image"
          />
          right and top when it is smaller
        </section>
      </div>
    </div>
  );
};

export default WittraCard;
