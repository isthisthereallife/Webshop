function Footer() {
  return (
    <div className="footer">
      <footer class="footer bg-white relative pt-1 border-b-2 border-red-700">
        <div class="container mx-auto px-6">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div class="flex flex-col">
                <span class="font-bold text-red-700 uppercase mb-2">
                  Footer header 1
                </span>
                <span class="my-2">
                  <a
                    href="#"
                    class="text-yellow-700  text-md hover:text-red-500"
                  >
                    link 1
                  </a>
                </span>
                <span class="my-2">
                  <a
                    href="#"
                    class="text-yellow-700  text-md hover:text-red-500"
                  >
                    link 1
                  </a>
                </span>
                <span class="my-2">
                  <a
                    href="#"
                    class="text-yellow-700  text-md hover:text-red-500"
                  >
                    link 1
                  </a>
                </span>
              </div>
              <div class="flex flex-col"></div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-4xl text-white-400 font-bold mb-2">© BREWDOG</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
