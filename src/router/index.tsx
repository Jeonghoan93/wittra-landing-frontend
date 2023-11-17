import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AccountLayout from "src/layouts/AccountLayout";
import CareerLayout from "src/layouts/CareerLayout";
import HostLayout from "src/layouts/HostLayout";
import PaymentLayout from "src/layouts/PaymentLayout";
import Account from "src/pages/Account";
import Favorites from "src/pages/Account/Pages/Favorites";
import LoginSecurity from "src/pages/Account/Pages/LoginSecurity";
import Messages from "src/pages/Account/Pages/Messages";
import PersonalInfo from "src/pages/Account/Pages/PersonalInfo";
import Career from "src/pages/Career";
import Positions from "src/pages/Career/Pages/Positions";
import EnterprisePage from "src/pages/Company";
import Enterprise from "src/pages/Enterprise";
import EventDetail from "src/pages/EventDetail";
import Host from "src/pages/Host";
import MyEvents from "src/pages/Host/Pages/Listings";
import Taxes from "src/pages/Host/Pages/Tax";
import BusinessPlan from "src/pages/Investor/BusinessPlan";
import Notifications from "src/pages/Notifications";
import Partner from "src/pages/Partner";
import Profile from "src/pages/Profile";

import EventDetailLayout from "src/layouts/EventDetailLayout";
import InvestorLayout from "src/layouts/InvestorLayout";
import ProfileLayout from "src/layouts/ProfileLayout";
import ReservationLayout from "src/layouts/ReservationLayout";
import Activity from "src/pages/Account/Pages/Activity";
import Payments from "src/pages/Account/Pages/Payments";
import Listings from "src/pages/Host/Pages/Listings";
import MessagesHost from "src/pages/Host/Pages/Messages";
import PaymentsHost from "src/pages/Host/Pages/Payments";
import Investor from "src/pages/Investor";
import Reservation from "src/pages/Reservation";
import ScrollToTop from "src/utils/ScrollToTop";
import Home from "src/pages/Home";
import RootLayout from "src/layouts/RootLayout";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* For Home routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />

          {/* Company */}
          <Route path="company" element={<EnterprisePage />} />
          <Route path="partner" element={<Partner />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* For PaymentLayout routes */}
        <Route path="booking-form" element={<PaymentLayout />}>
          <Route index element={<Host />} />
          {/* Add other host specific routes here if any */}
        </Route>

        {/* For Career routes */}
        <Route path="careers" element={<CareerLayout />}>
          <Route index element={<Career />} />
          <Route path="positions" element={<Positions />} />
          {/* Add other host specific routes here if any */}
        </Route>

        {/* For Investor routes */}
        <Route path="investor" element={<InvestorLayout />}>
          <Route index element={<Investor />} />
          <Route path="business-plan" element={<BusinessPlan />} />

          {/* Add other host specific routes here if any */}
        </Route>

        {/* For EventDetail routes */}
        <Route path="events/:eventId" element={<EventDetailLayout />}>
          <Route index element={<EventDetail />} />

          {/* Add other host specific routes here if any */}
        </Route>

        {/* For Profile routes */}
        <Route path="profile/:userId" element={<ProfileLayout />}>
          <Route index element={<Profile />} />

          {/* Add other host specific routes here if any */}
        </Route>

        {/* For Reservation routes */}
        <Route path="reservation/:eventId" element={<ReservationLayout />}>
          <Route index element={<Reservation />} />

          {/* Add other host specific routes here if any */}
        </Route>

        {/* For HostLayout routes */}
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Host />} />
          <Route path="listings" element={<Listings />} />
          <Route path="transactions" element={<MyEvents />} />
          <Route path="messages" element={<MessagesHost />} />
          <Route path="tax" element={<Taxes />} />
          <Route path="payments" element={<PaymentsHost />} />
          {/* Add other host specific routes here if any */}
        </Route>

        {/* For Account routes */}
        <Route path="account" element={<AccountLayout />}>
          <Route index element={<Account />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="login-security" element={<LoginSecurity />} />
          <Route path="activity" element={<Activity />} />
          <Route path="messages" element={<Messages />} />
          <Route path="payments" element={<Payments />} />
          <Route path="favorites" element={<Favorites />} />

          {/* Add other host specific routes here if any */}
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
