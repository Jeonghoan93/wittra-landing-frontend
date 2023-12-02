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
import Avatar from "../../Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
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
          onClick={onRent}
          className="
        
            text-sm 
         font-bold
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Applications
        </div>

        <div
          onClick={onRent}
          className="
        
            text-sm 
         font-bold
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Products
        </div>

        <div
          onClick={onRent}
          className="
        
            text-sm 
         font-bold
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Technology
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
