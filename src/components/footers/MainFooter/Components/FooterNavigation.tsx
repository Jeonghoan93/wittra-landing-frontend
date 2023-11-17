import { FC } from "react";
import { useNavigate } from "react-router-dom";
import FooterSectionTitle from "./FooterSectionTitle";

export interface Navigation {
  label: string;
  path: () => void;
}

const NavigationItem: FC<Navigation> = ({ label, path }) => {
  return (
    <div
      className="cursor-pointer font-semibold mb-1 block text-gray-600 hover:underline"
      onClick={path}
    >
      {label}
    </div>
  );
};

const FooterNavigation: FC = () => {
  const navigate = useNavigate();

  const companyMenu: Array<Navigation> = [
    { label: "Investor", path: () => navigate("/investor") },
    { label: "Partners", path: () => navigate("/investor") },
    { label: "Careers", path: () => navigate("/careers") },
  ];

  const AboutUsMenu: Array<Navigation> = [
    {
      label: "Values",
      path: () => navigate("/partner?menu=Club%20Owner"),
    },
    {
      label: "Patented Technology",
      path: () => navigate("/partner?menu=Festival%20Organizer"),
    },
    {
      label: "Meet our team",
      path: () => navigate("/partner?menu=Rave%20Organizer"),
    },
    {
      label: "Contact us",
      path: () => navigate("/partner?menu=Rave%20Organizer"),
    },
    {
      label: "IoT consultation",
      path: () => navigate("/partner?menu=Rave%20Organizer"),
    },
  ];

  const KnowedlgeMenu = [
    {
      label: "Brochures",
      path: () =>
        window.open("https://www.linkedin.com/in/jimmy-h-199814242/", "_blank"),
    },
    {
      label: "White papers",
      path: () =>
        window.open("https://www.linkedin.com/in/jimmy-h-199814242/", "_blank"),
    },
    {
      label: "Solutions",
      path: () =>
        window.open("https://www.linkedin.com/in/jimmy-h-199814242/", "_blank"),
    },
    {
      label: "Blog",
      path: () =>
        window.open("https://www.linkedin.com/in/jimmy-h-199814242/", "_blank"),
    },
    {
      label: "Poadcast",
      path: () =>
        window.open("https://www.linkedin.com/in/jimmy-h-199814242/", "_blank"),
    },
    {
      label: "Press releases",
      path: () =>
        window.open("https://www.linkedin.com/in/jimmy-h-199814242/", "_blank"),
    },
  ];

  return (
    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/3 p-3">
        <FooterSectionTitle title="Company" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </div>
      <div className="w-full md:w-1/3 p-3">
        <FooterSectionTitle title="Knowledge" />
        {KnowedlgeMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </div>
      <div className="w-full md:w-1/3 p-3">
        <FooterSectionTitle title="About us" />
        {AboutUsMenu.map(({ label, path }, index) => (
          <NavigationItem key={index} label={label} path={path} />
        ))}
      </div>
    </div>
  );
};

export default FooterNavigation;
