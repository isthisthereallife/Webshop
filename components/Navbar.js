function Navbar() {
  return (
    <>
      <div class="navContainer">
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-16">
          <div class="flex items-center flex-shrink-0 text-white mr-12 space-x-18">
            <svg
              class="fill-current h-12 w-8 mr-9"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="#" />
            </svg>

            <span class="font-semibold text-6xl tracking-tight">
              Brewdog Beer
            </span>
          </div>
          <div class="block lg:hidden">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="#" />
            </svg>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto space-x-10">
            <div class=" text-sm lg:flex-grow space-x-20">
              <a
                href="/"
                class="block mt-4 lg:inline-block text-4xl lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Home
              </a>
              <a
                href="#"
                class="block mt-4 lg:inline-block text-4xl lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Shopping Cart
              </a>
              <a
                href="#"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
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
