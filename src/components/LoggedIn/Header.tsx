import { useLocation } from "react-router-dom";
import { BarIcon } from "../Svgs/Svg";

type Props = {
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ openMobileNav }: Props) => {
  const location = useLocation();
  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 lg:ml-[250px] lg:w-[calc(100vw-250px)]">
      <div className="flex h-[80px] justify-between items-center pr-5 border-b bg-white">
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer lg:hidden pl-5"
            onClick={() => openMobileNav(true)}
          >
            <BarIcon />
          </div>
          <div className="capitalize text-lg sm:text-2xl font-bold lg:pl-[24px]">
            {location.pathname === "/" ? (
              <div className="flex gap-2 items-center">
                <div className="text-lg sm:text-2xl font-bold">Verifiers</div>
                <div className="flex justify-center items-center rounded-full text-xs h-6 w-6 bg-secondary text-primary">
                  11
                </div>
              </div>
            ) : (
              location.pathname.split('/')[1]
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
