import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useContactUsModal from "src/hooks/useContactUsModal";
import useRentModal from "src/hooks/useRentModal";

const NavbarHost: React.FC = () => {
  const currentUser = useCurrentUser();
  const ContactUsModal = useContactUsModal();
  const navigate = useNavigate();

  const rentModal = useRentModal();

  return (
    <div className="fixed z-10 w-full bg-white">
      <div
        className="
          p-4 
        "
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <span
              onClick={
                currentUser ? () => alert("Not yet!") : ContactUsModal.onOpen
              }
              className="cursor-pointer shadow-sm rounded-full border-[1px] border-neutral-100 "
            >
              {" "}
              <img
                className="rounded-full"
                height="50"
                width="50"
                alt="Avatar"
                src={currentUser?.img || "/images/placeholder.jpg"}
              />
            </span>

            <div className="flex flex-col">
              <span
                onClick={() => navigate("/account")}
                className="cursor-pointer text-[16pt] font-bold"
              >
                {currentUser && currentUser.firstName != null
                  ? currentUser.firstName
                  : "Account"}
              </span>

              {currentUser ? (
                <span className="font-semibold text-[10pt]">
                  {currentUser.email}
                </span>
              ) : (
                <span
                  onClick={ContactUsModal.onOpen}
                  className="cursor-pointer font-semibold underline text-[10pt]"
                >
                  Login to see
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <span onClick={() => navigate("/host")} className="cursor-pointer">
              <BiHomeAlt2 size={25} />
            </span>
            <span onClick={rentModal.onOpen} className="cursor-pointer">
              <AiOutlineAppstoreAdd size={25} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHost;
