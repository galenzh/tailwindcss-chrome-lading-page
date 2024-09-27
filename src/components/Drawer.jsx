import Logo from "./Logo";
import clsx from "clsx";

const Drawer = ({ isOpen, onCloseDrawer, navData }) => {
  return (
    <div
      className={clsx(
        "w-full h-full bg-black/50 fixed overflow-hidden left-0 top-0 transition-opacity duration-500 ease-in-out",
        !isOpen && "opacity-0 pointer-events-none"
      )}
      onClick={() => onCloseDrawer()}
    >
      <div
        className={clsx(
          "max-w-[25rem] h-full bg-white absolute inset-0 right-[58px] transform -translate-x-full transition-transform duration-500 ease-in-out",
          isOpen && "translate-x-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center h-16 pl-6 border-b border-gray-200">
          <Logo />
        </div>
        <nav className="px-2 mt-5">
          <ul>
            {navData.map((text) => (
              <li key={text}>
                <a
                  className="flex items-center px-3 h-12 rounded-l-sm rounded-r-full text-gray-600  hover:text-gray-950 hover:bg-slate-50 transition duration-300 ease-in-out"
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
        <div className="flex items-center w-full h-20 absolute left-0 bottom-0 shadow-[0_-2px_3px_rgba(0,0,0,0.05)] px-4">
          <a
            href="/"
            className="grid place-content-center w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg"
          >
            Download Chrome
          </a>
        </div>
        <div
          className="grid place-content-center size-9 absolute z-10 top-3 -right-12 cursor-pointer"
          onClick={() => onCloseDrawer()}
        >
          <svg className="size-6 inline-block fill-current" aria-hidden="true">
            <use href="./site-icons.svg#close-white"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
