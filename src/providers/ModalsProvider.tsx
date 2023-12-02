import ContactUsModal from "src/components/modals/ContactUsModal";
import RegisterModal from "src/components/modals/RegisterModal";
import RentModal from "src/components/modals/RentModal";
import SearchModal from "src/components/modals/SearchModal";

const ModalsProvider = () => {
  return (
    <>
      <ContactUsModal />
      <RegisterModal />
      <SearchModal />
      <RentModal />
    </>
  );
};

export default ModalsProvider;
