type Props = {
  mobileNav: boolean;
  openMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const BarIcon = () => {
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
const Header = ({ mobileNav, openMobileNav }: Props) => {
  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 lg:ml-[250px] lg:w-[calc(100vw-250px)] shadow">
      {!mobileNav && (
        <div
          className="cursor-pointer flex justify-end items-center h-[80px] pr-5 border-b"
          onClick={() => openMobileNav(true)}
        >
          <BarIcon />
        </div>
      )}
    </div>
  );
};

export default Header;
