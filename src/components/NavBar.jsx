import Logo from "./Logo";

const NavBar = ({ navData, onOpenDrawer }) => {
  return (
    <div className="flex items-center h-16 bg-white shadow-md pl-6">
      <div
        className="mr-6 cursor-pointer md:hidden"
        onClick={() => onOpenDrawer()}
      >
        <svg className="w-6 h-6 inline-block fill-current" aria-hidden="true">
          <use href="./site-icons.svg#hamburger"></use>
        </svg>
      </div>
      <Logo />
      <nav className="h-full ml-8 hidden md:block">
        <ul className="flex h-full">
          {navData.map((text) => (
            <li key={text} className="flex items-center">
              <a
                className="block h-10 leading-10 px-3 text-center rounded-lg text-gray-600 hover:text-gray-950 hover:bg-slate-50 transition duration-300 ease-in-out"
                href="/"
              >
                {text}
                {text === "Extensions" && (
                  <svg
                    className="w-5 h-4 inline-block fill-current"
                    aria-hidden="true"
                  >
                    <use href="./site-icons.svg#arrow-external"></use>
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
