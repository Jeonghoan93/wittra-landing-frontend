import { useNavigate } from "react-router-dom";
import { useIsCertainPage } from "src/hooks/useIsCertainPage";
import FooterNavigation from "./Components/FooterNavigation";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const MainFooter: React.FC = () => {
  const navigate = useNavigate();
  const isEventsPage = useIsCertainPage("/events", {
    startsWith: true,
  });

  if (isEventsPage) {
    return null;
  }

  return (
    <footer
      className="
        bg-gray-100 
        text-gray-900 
        max-w-[2520px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
        py-20
        "
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/5 px-2 mb-3 md:mb-0">
          <div className="w-full md:w-90 flex flex-col gap-3">
            <div className="flex flex-col">
              <span
                className="cursor-pointer text-[14pt] font-extrabold"
                onClick={() => navigate("/")}
              >
                GOTO™ AB
              </span>
              <span className="text-gray-500 mb-0 text-[12pt] font-semibold ">
                Unlocking marketing, pr and fashion strategies
              </span>
            </div>

            <div className="flex flex-col text-[11pt]">
              <span className="font-semibold">
                Västra Järnvägsgatan 3 (9th Floor)
              </span>

              <span className="font-semibold">111 64 Stockholm</span>
            </div>

            <div className="flex flex-col gap-1 text-[11pt]">
              <div className="flex flex-row gap-2 items-center">
                <span>
                  <FaPhoneAlt />
                </span>
                <span className="font-semibold">+46 8 387871</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <span>
                  <MdAttachEmail />
                </span>
                <span className="font-semibold">info@GOTO.io</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 px-2">
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
