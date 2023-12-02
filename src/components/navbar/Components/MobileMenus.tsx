import { useCallback, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCreateProfileModal from "src/hooks/useCreateProfile";
import useContactUsModal from "src/hooks/useContactUsModal";
import useRegisterModal from "src/hooks/useRegisterModal";
import useRentModal from "src/hooks/useRentModal";
import useOnClickOutside from "src/hooks/userOnClickOutside";
import { User } from "src/interfaces/user";
import { logout } from "src/services/auth";
import MenuItem from "./MenuItem";

interface MobileMenusProps {
  currentUser?: User | null;
}

const MobileMenus: React.FC<MobileMenusProps> = ({ currentUser }) => {
  const navigate = useNavigate();

  const contactUsModal = useContactUsModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const createProfileModal = useCreateProfileModal();

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  useOnClickOutside([menuRef], () => setIsOpen(false));

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return contactUsModal.onOpen();
    }

    rentModal.onOpen();
  }, [contactUsModal, rentModal, currentUser]);

  const handleSignOut = async () => {
    try {
      await logout();

      toast.success("Logged out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu size={22} />
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="
            absolute 
            rounded-xl 
            shadow-lg
            w-[40vw]
            md:w-[30vw]
            lg:w-[20vw] 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col p-1 cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  semibold={true}
                  label="Messages"
                  onClick={() => navigate("/account/messages/:userId")}
                />
                <MenuItem
                  semibold={true}
                  label="Notifications"
                  onClick={() => navigate("/notifications")}
                />
                <MenuItem
                  semibold={true}
                  label="Tickets"
                  onClick={() => navigate("/account/activity")}
                />
                <MenuItem
                  semibold={true}
                  label="Favorites"
                  onClick={() => navigate("/account/favorites")}
                />
                <hr />
                <MenuItem
                  label="Account"
                  onClick={() => navigate("/account")}
                />
                <MenuItem
                  label="My events"
                  onClick={() => navigate("/my-events")}
                />
                <MenuItem label="List your party" onClick={rentModal.onOpen} />

                <hr />
                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="Enterprise"
                    onClick={() => navigate("/enterprise")}
                  />
                  <MenuItem
                    label="Profile"
                    onClick={createProfileModal.onOpen}
                  />
                </div>
                <div
                  className="
                  block
                  md:hidden
                "
                >
                  <MenuItem label="Home" onClick={() => navigate("/")} />
                </div>
                <MenuItem label="Logout" onClick={handleSignOut} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={contactUsModal.onOpen} />

                <MenuItem label="Sign up" onClick={registerModal.onOpen} />

                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="List your party"
                    onClick={
                      currentUser ? rentModal.onOpen : contactUsModal.onOpen
                    }
                  />
                </div>
                <hr className="block lg:hidden" />
                <div
                  className="
                  block
                  md:hidden
                "
                >
                  <MenuItem label="Home" onClick={() => navigate("/")} />
                </div>
                <div
                  className="
                  block
                  lg:hidden
                "
                >
                  <MenuItem
                    label="Enterprise"
                    onClick={() => navigate("/enterprise")}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenus;
