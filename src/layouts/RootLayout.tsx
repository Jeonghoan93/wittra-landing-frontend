import { Outlet } from "react-router-dom";
import FixedFooter from "src/components/footers/FixedFooter";
import MainFooter from "src/components/footers/MainFooter";
import MobileFooter from "src/components/footers/MobileFooter.tsx";
import Navbar from "src/components/navbar/Navbar";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import ModalsProvider from "src/providers/ModalsProvider";

export default function RootLayout() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <ModalsProvider />

      <Navbar />

      <div className="pb-20 pt-[95px]">
        <Outlet />
      </div>
      {isMobile ? <MobileFooter /> : <FixedFooter />}
      <MainFooter />
    </>
  );
}
