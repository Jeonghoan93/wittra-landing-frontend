import useHandleScroll from "src/hooks/useHandleScroll";

const MobileFooter: React.FC = () => {
  const hideNav = useHandleScroll();

  return (
    <div
      style={{ height: "70px" }}
      className={`border-t-[2px] fixed bottom-0 w-full bg-gray-50 shadow-md transition-transform duration-500 ${
        hideNav ? "translate-y-full" : ""
      }`}
    >
      <div className="flex justify-around h-full px-4">
        <div className="flex flex-row items-center gap-3">
          <span className="font-bold text-[13pt]">Hi, Welcome to Wittra!</span>
          <span className="cursor-pointer">
            <img
              className="rounded-full"
              height="40"
              width="40"
              alt="Avatar"
              src={"/images/bot.jpg"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
