import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Button";
import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useContactUsModal from "src/hooks/useContactUsModal";

const Payments = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  const contactUsModal = useContactUsModal();

  if (!currentUser) {
    return (
      <Container>
        <div className="pb-6">
          <div className="pb-6 text-gray-700 text-[10pt] font-semibold flex flex-row gap-1 items-center">
            <span
              onClick={() => navigate("/account")}
              className="hover:underline cursor-pointer"
            >
              Account
            </span>
            <span>
              <AiOutlineRight size={11} color={"gray"} />
            </span>
            <span className="text-gray-500">Payments & Payout</span>
          </div>

          <div
            style={{ maxWidth: "500px" }}
            className="p-2 flex flex-col h-screen gap-6"
          >
            <h2 className="text-[24pt] font-bold">Payments & Payout</h2>

            <div className="flex flex-col gap-2">
              <span className="text-[14pt] font-bold">
                Log in to view the status
              </span>
              <span className="text-[12pt] text-gray-600">
                You can view the payment history once you've logged in.
              </span>
            </div>

            <div style={{ maxWidth: "100px" }}>
              <Button label="Log in" onClick={contactUsModal.onOpen} />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (currentUser) {
    return (
      <Container>
        <div>Not yet implemented</div>
      </Container>
    );
  }
};

export default Payments;
