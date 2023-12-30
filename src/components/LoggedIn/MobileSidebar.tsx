import { CancelIcon } from "../Svgs/Svg";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  mobileNav: boolean;
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileSidebar = ({ openMobileNav, mobileNav }: Props) => {
  const breakPoint = useMediaQuery("(max-width: 1024px)");

  return (
    <div
      className={`fixed bg-black/70 z-[1000]  transition-all duration-300  ${
        mobileNav ? "left-0 w-full" : "left-[-1000px] w-0"
      } ${breakPoint ? "z-[200] h-screen" : "z-[-1] h-0"}`}
    >
      <div className="w-4/5 sm:w-1/2 h-full lg:hidden">
        <Sidebar openMobileNav={openMobileNav} />
      </div>
      <div
        onClick={() => openMobileNav(false)}
        className="text-white absolute right-3 top-3 sm:right-6 sm:top-6 cursor-pointer lg:hidden"
      >
        <CancelIcon />
      </div>
    </div>
  );
};

export default MobileSidebar;
