import { Outlet } from "react-router-dom";
import MobileFooter from "src/components/footers/MobileFooter";
import CreateProfileModal from "src/components/modals/CreateProfileModal";
import FinishRegister from "src/components/modals/FinishRegisterModal";
import ContactUsModal from "src/components/modals/ContactUsModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SearchModal from "src/components/modals/SearchModal";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import NavbarHost from "src/pages/Host/Components/NavbarHost";
import SideBar from "src/pages/Host/Components/SideBar";
import ToasterProvider from "src/providers/ToasterProvider";

export default function HostLayout() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <ToasterProvider />
      <ContactUsModal />
      <RegisterModal />
      <FinishRegister />
      <CreateProfileModal />

      <SearchModal />
      <RentModal />

      {isMobile ? <NavbarHost /> : <SideBar />}

      <div
        className={`py-5 sm:py-10 ${
          !isMobile ? "pl-[200px] pr-6" : "pt-[75pt]"
        }`}
      >
        <Outlet />
      </div>

      {isMobile ? <MobileFooter /> : ""}
    </>
  );
}
