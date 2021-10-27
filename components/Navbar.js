function Navbar() {
  return (
    <>
      <div className="navContainer">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-16">
          <div className="flex items-center flex-shrink-0 text-white mr-12 space-x-18">
            <svg
              className="fill-current h-12 w-8 mr-9"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="#" />
            </svg>

            <span className="font-semibold text-6xl tracking-tight">
              Brewdog Beer
            </span>
          </div>
          <div className="block lg:hidden">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="#" />
            </svg>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto space-x-10">
            <div className=" text-sm lg:flex-grow space-x-20">
              <a
                href="/"
                className="block mt-4 lg:inline-block text-4xl lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Home
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block text-4xl lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Shopping Cart
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              ></a>
            </div>
            <div></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
