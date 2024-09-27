const Hero = () => {
  return (
    <div>
      <div className="pt-10">
        <img
          className="size-[63px] mx-auto"
          src="./chrome-logo-m100.svg"
          alt="Chrome logo"
        />
        <h1 className="text-5xl font-semibold text-center mt-5 sm:text-6xl lg:text-7xl">
          The browser
          <br />
          built to be yours
        </h1>
        <div className="max-w-[440px] mx-auto text-center">
          <div className="grid place-content-center mt-5">
            <a
              href="/"
              className="flex justify-center items-center gap-2 px-8 h-16 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg"
            >
              <svg
                className="size-6 inline-block fill-current"
                aria-hidden="true"
              >
                <use href="./site-icons.svg#download"></use>
              </svg>
              Download Chrome
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">For macOS 11 or later</p>
          <div className="mt-8">
            <a className="text-blue-600" href="/">
              I want to update Chrome
            </a>
          </div>
          <div className="mt-8">
            <p className="text-xs text-gray-500 px-3">
              By downloading Chrome, you agree to the{" "}
              <a className="text-blue-400" href="/">
                Google Terms of Service
              </a>
              and
              <a className="text-blue-400" href="/">
                Chrome and ChromeOS Additional Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
