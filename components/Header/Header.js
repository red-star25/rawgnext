import { useRouter } from "next/router";
import { useState } from "react";
import {
  BellIcon,
  ChatIcon,
  CogIcon,
  DotsHorizontalIcon,
  LogoutIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";

export default function Header() {
  const router = useRouter();

  const [searchGame, setSearch] = useState("");

  return (
    <div className="flex pt-6 items-center">
      <h3 className="font-extrabold pr-10 ml-4 text-white text-lg">
        G H O S T
      </h3>
      <div className="flex flex-1 bg-black h-10 rounded-full items-center hover:bg-gray-900 cursor-text transition duration-200">
        <SearchIcon className="h-5 w-5 mr-1 text-[#484848]" />
        <form
          className="w-[100%] h-10 hover:bg-gray-900"
          onSubmit={(e) => {
            if (searchGame != null || searchGame !== "") {
              e.preventDefault();
              router.push(`/?search=${searchGame}`);
            }
          }}
        >
          <input
            className="text-white md:flex w-full rounded-full pl-2 bg-black outline-none placeholder-gray-500 text-[15px] hover:bg-gray-900 h-full transition duration-200"
            style={{ caretColor: "white" }}
            type="search"
            placeholder="Search games"
            value={searchGame}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="flex items-center md:hidden">
        <div className="flex items-center justify-center w-7 h-7 mx-3 rounded-full bg-purple-800 cursor-pointer text-white font-bold text-xs">
          <h4>RS</h4>
        </div>
        <MenuIcon
          onClick={() => {
            if (
              document.getElementById("mobileMenu").classList.contains("hidden")
            ) {
              document.getElementById("mobileMenu").classList.remove("hidden");
              document.getElementById("mobileMenu").classList.add("flex");
            }
          }}
          className="h-6 w-6 text-white md:hidden cursor-pointer"
        />
        <div
          id="mobileMenu"
          className="hidden w-[100%] h-[100%] bg-gradient-to-l from-black absolute z-50 top-0 left-0 items-end justify-end"
        >
          <div className="w-[60%] h-[100%] bg-[#181A1B] rounded-t-3xl flex flex-col overflow-y-scroll scrollbar-hide mb-2">
            <div className="flex justify-around items-center mt-6">
              <h3 className="font-extrabold  text-white text-lg">G H O S T</h3>
              <XIcon
                onClick={() => {
                  document
                    .getElementById("mobileMenu")
                    .classList.remove("flex");
                  document.getElementById("mobileMenu").classList.add("hidden");
                }}
                className="h-8 w-8 text-white cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-center justify-center ml-3 mt-8 gap-y-2">
              <p
                onClick={() => router.push("/platforms")}
                className="cursor-pointer text-white text-2xl mb-3"
              >
                Platforms
              </p>
              <p className="cursor-pointer text-white text-2xl mb-3">Stores</p>
              <p
                onClick={() => router.push("/genres")}
                className="cursor-pointer text-white text-2xl mb-3"
              >
                Genres
              </p>
              <p
                onClick={() => router.push("/creators")}
                className="cursor-pointer text-white text-2xl mb-3"
              >
                Creators
              </p>
              <p
                onClick={() => router.push("/tags")}
                className="cursor-pointer text-white text-2xl mb-3"
              >
                Tags
              </p>
              <p
                onClick={() => router.push("/developers")}
                className="cursor-pointer text-white text-2xl mb-3"
              >
                Developers
              </p>
              <p
                onClick={() => router.push("/publishers")}
                className="cursor-pointer text-white text-2xl"
              >
                Publishers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden items-center md:flex">
        <div className="flex items-center justify-center w-10 h-10 ml-3 rounded-full bg-purple-800 cursor-default text-white font-bold text-lg">
          <h4>RS</h4>
        </div>
      </div>
    </div>
  );
}
