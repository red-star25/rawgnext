export default function Header() {
  return (
    <div className="flex pt-6 items-center">
      <h3 className="font-extrabold pr-10 ml-4 text-white text-lg">R A W G</h3>
      <div className="flex flex-1 bg-black h-10 rounded-full items-center hover:bg-gray-900 cursor-text transition duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-4 mr-1 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="#484848"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="hidden md:flex w-full rounded-full pl-2 bg-black outline-none placeholder-gray-500 text-[15px] hover:bg-gray-900 h-full transition duration-200"
          style={{ caretColor: "white" }}
          type="text"
          placeholder="Search 537,393 games"
        />
        <input
          className="flex w-full rounded-full pl-2 bg-black outline-none placeholder-gray-500 text-[15px] hover:bg-gray-900 h-full transition duration-200 md:hidden"
          style={{ caretColor: "white" }}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center md:hidden">
        <div className="flex items-center justify-center w-8 h-8 mx-3 rounded-full bg-purple-800 cursor-pointer text-white font-bold text-xs">
          <h4>RS</h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="hidden items-center md:flex">
        <div className="flex items-center justify-center w-10 h-10 ml-3 rounded-full bg-purple-800 cursor-pointer text-white font-bold text-lg">
          <h4>RS</h4>
        </div>
        <h4 className="text-sm font-normal px-3 text-white cursor-pointer">
          My Library
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 cursor-pointer"
          viewBox="0 0 20 20"
          fill="#fff"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mx-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <h4 className="text-sm font-semibold px-2 text-white cursor-pointer">
          API
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mx-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
    </div>
  );
}
