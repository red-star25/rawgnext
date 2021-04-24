import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import LeftHome from "../../components/HomeComponents/LeftHome";

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-[100%] bg-black px-5">
      <Header />
      <div className=" mt-10 w-[100%] h-[100%] flex ">
        <div className="w-[0%] hidden lg:flex lg:w-[17%]">
          <LeftHome />
        </div>
        <div className="w-[100%] ml-4 lg:w-[83%]">
          <p className="text-white text-7xl font-bold">{slug}</p>
          <div className="flex items-center mt-7 cursor-pointer  text-white ">
            Order by:
            <span className="text-white font-bold text-sm pl-2 flex hover:text-[#666666] transition duration-150 ">
              Relevance{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#707070"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-8xl mt-5 ">
              {slug === "Wishlist" ? "🧐" : slug === "My-Library" ? "🧐" : "😴"}
            </p>
            <p className="text-[#626363] text-lg mt-5">
              {slug === "Friends"
                ? "You don't follow anyone yet"
                : "No games found. Try clearing all filters"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
