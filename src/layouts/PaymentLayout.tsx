import { Outlet } from "react-router-dom";
import CreateProfileModal from "src/components/modals/CreateProfileModal";
import FinishRegister from "src/components/modals/FinishRegisterModal";
import ContactUsModal from "src/components/modals/ContactUsModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SearchModal from "src/components/modals/SearchModal";
import Navbar from "src/components/navbar/Navbar";
import ToasterProvider from "src/providers/ToasterProvider";

export default function PaymentLayout() {
  return (
    <>
      <ToasterProvider />
      <ContactUsModal />
      <FinishRegister />
      <CreateProfileModal />
      <RegisterModal />
      <SearchModal />
      <RentModal />
      <Navbar />

      <div className="pb-20 pt-28">
        <Outlet />
      </div>
    </>
  );
}
