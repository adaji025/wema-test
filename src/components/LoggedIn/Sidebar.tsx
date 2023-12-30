import { useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Logo from "../../assets/svgs/xpress.svg";
import { VerifierIcons } from "../Svgs/Svg";

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
      route: "/",
    },
  ];

  return (
    <Fragment>
      <aside className="flex w-full h-full flex-col justify-between shadow-md p-[24px]">
        <div className="w-full">
          <div className="mt-[18px] p-2 text-center flex justify-center font-bold rounded-full">
            <img src={Logo} alt="" />
          </div>

          <div className="mt-14 text-sm sm:text-base grid gap-5">
            {users.map((route: any, index: number) => (
              <div
                key={index}
                className={`flex cursor-pointer gap-3 text-white items-center px-3 py-3 text-sm rounded-lg ${
                  location.pathname === route.route &&
                  "bg-secondary text-primary border-l-4 border-primary"
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
