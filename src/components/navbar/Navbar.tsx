import { useLocation } from "react-router-dom";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { isMatchingPath } from "src/utils/isMatchingPath";
import Container from "../Container";
import Logo from "./Components/Logo";
import UserMenu from "./Components/UserMenu";
import MobileMenus from "../mobileMenus/MobileMenus";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isEventDetailPage = isMatchingPath(pathname, "/events/:eventId");
  const isBusinessPlanPage = isMatchingPath(
    pathname,
    "/investor/business-plan"
  );

  const currentUser = useCurrentUser();

  if (isEventDetailPage) {
    return null;
  }

  if (isBusinessPlanPage) {
    return null;
  }

  return (
    <div className="fixed w-full bg-black z-10 pb-3 shadow-sm">
      <div
        className="
          pt-4
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <div className="flex flex-row">
              <Logo />
            </div>

            <div className="hidden sm:block">
              <UserMenu currentUser={currentUser} />
            </div>

            <div className="block sm:hidden">
              <MobileMenus />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
