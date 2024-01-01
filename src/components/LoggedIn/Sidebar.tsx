import { useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Logo from "../../assets/svgs/xpress.svg";
import { DealsIcons, TransferIcons, VerifierIcons } from "../Svgs/Svg";

type Props = {
  openMobileNav?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ openMobileNav }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const users = [
    {
      title: "Verifiers",
      icon: <VerifierIcons />,
      route: "/verifiers",
    },
    {
      title: "Deals",
      icon: <DealsIcons />,
      route: "/deals",
    },
    {
      title: "Transactions",
      icon: <TransferIcons />,
      route: "/transactions",
    },
  ];

  return (
    <Fragment>
      <aside className="flex w-full h-full flex-col justify-between bg-secondary lg:bg-white shadow">
        <div className="w-full px-[24px]">
          <div className="mt-[18px] p-2 text-center flex justify-center font-bold rounded-full">
            <img src={Logo} alt="express" className="w-[100px]" />
          </div>

          <div className="mt-12 text-sm sm:text-base grid gap-5">
            {users.map((route: any, index: number) => (
              <div
                key={index}
                className={`flex cursor-pointer gap-3 text-[#1A1619] items-center px-3 py-3 text-sm rounded-lg ${
                  location.pathname === route.route &&
                  "bg-primary lg:bg-secondary lg:text-primary border-l-4 border-primary"
                }`}
                onClick={() => {
                  navigate(route.route);
                  openMobileNav && openMobileNav(false);
                }}
              >
                {route.icon}
                <div className="font-semibold">{route.title}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
