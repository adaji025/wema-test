import Sidebar from "./Sidebar";
import { useMediaQuery } from "@mantine/hooks";

const CancelIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

type Props = {
  mobileNav: boolean;
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileSidebar = ({ openMobileNav, mobileNav }: Props) => {
  const breakPoint = useMediaQuery("(max-width: 1024px)");

  return (
    <div
      className={`fixed bg-black/10 z-[1000]  transition-all duration-300  ${
        mobileNav ? "left-0 w-full" : "left-[-1000px] w-0"
      } ${breakPoint ? "z-[200] h-screen" : "z-[-1] h-0"}`}
    >
      <div className="w-4/5 sm:w-1/2 bg-darkBlue h-full lg:hidden p-[22px]">
        <Sidebar openMobileNav={openMobileNav} />
      </div>
      <div onClick={() => openMobileNav(false)}>
        <CancelIcon />
      </div>
    </div>
  );
};

export default MobileSidebar;
