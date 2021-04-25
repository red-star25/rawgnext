import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import Controller from "../../controller/controller";

export default function RightHome({ gamesData, page }) {
  const size = useWindowSize();
  const router = useRouter();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <div>
      <div className="hidden md:block">
        <h1 className=" text-white text-6xl font-bold">New and Trending</h1>
        <p className=" text-gray-200 pt-1 ">
          Based on player counts and release date
        </p>
      </div>
      <div className="flex flex-col items-center justify-center md:hidden">
        <h1 className=" text-white text-4xl font-bold ">Top picks</h1>
        <p className="text-gray-200 pt-1">Based on your ratings</p>
      </div>

      <div className="flex items-center mt-7 cursor-pointer  text-white ">
        Order by:
        <span className="text-white font-bold text-sm pl-2 flex hover:text-[#666666] transition duration-150 ">
          Relevance {Controller.listOfSVG.orderBy}
        </span>
      </div>
      <div
        className={`w-[100%] grid ${
          size.width >= 1024
            ? "grid-cols-4 gap-x-3"
            : size.width >= 768
            ? "grid-cols-3 gap-x-3 gap-y-2"
            : size.width >= 460
            ? "grid-cols-2 gap-x-3"
            : "grid-cols-1 gap-y-3"
        }`}
      >
        {gamesData["results"].map((games, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                router.push(`/games/${games["name"]}?id=${games["id"]}`)
              }
              onMouseOver={() => Controller.onMouseHover(games["id"])}
              onMouseOut={() => Controller.onMouseHoverLeave(games["id"])}
              className=" bg-[#181A1B] sm:w-[fit-content] h-[fit-content] rounded-xl pb-5  hover:scale-105 transform transition duration-200 relative m-1"
            >
              {games["background_image"] != null ? (
                <Image
                  className="rounded-xl"
                  src={games["background_image"]}
                  width={size.width <= 460 ? 400 : 300}
                  height={180}
                  quality={75}
                  objectFit="cover"
                />
              ) : (
                <div className="w-[270px] h-[210px] rounded-xl"></div>
              )}
              <div className="flex pl-3 items-center justify-between mx-2">
                <div className="flex  w-[80%] overflow-hidden">
                  {games["parent_platforms"] != null ? (
                    games["parent_platforms"].map((platform, idx) => {
                      return (
                        <div key={idx} className="mr-3 mt-3 text-white">
                          {platform["platform"]["name"] === "PC" ? (
                            Controller.listOfSearchedGameSvg.windows
                          ) : platform["platform"]["name"] === "Xbox" ? (
                            Controller.listOfSearchedGameSvg.xbox
                          ) : platform["platform"]["name"] === "PlayStation" ? (
                            Controller.listOfSearchedGameSvg.ps5
                          ) : platform["platform"]["name"] ===
                            "Nintendo Switch" ? (
                            Controller.listOfSearchedGameSvg.nintendo
                          ) : platform["platform"]["name"] === "iOS" ? (
                            Controller.listOfSearchedGameSvg.ios
                          ) : platform["platform"]["name"] === "Android" ? (
                            Controller.listOfSearchedGameSvg.android
                          ) : (
                            <div />
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  {games["metacritic"] != null ? (
                    <div
                      className={`${
                        games["metacritic"] >= 50 && games["metacritic"] < 80
                          ? "text-yellow-500 border-yellow-500"
                          : games["metacritic"] >= 80
                          ? "text-green-500 border-green-500"
                          : "text-red-500 border-red-500"
                      } text-sm font-bold h-6 w-6 border flex items-center justify-center rounded-md mt-2`}
                    >
                      {games["metacritic"]}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
              <div className="text-white text-xl font-bold w-[80%] mb-4 pl-3 pt-2">
                {games["name"]}
              </div>
              <div className="mt-3 flex  items-start">
                <div className="flex mr-5">
                  {Controller.listOfSVG.addedGames}
                  <p className="text-white text-sm">{games["added"]}</p>
                </div>
              </div>

              <div
                id={games["id"]}
                className="hidden cursor-pointer extraOnHoverInfo bg-[#181A1B] w-[100%] rounded-xl pt-5 px-3 h-[100%]
            "
              >
                <div className="flex justify-between items-center pb-3">
                  <p className="text-gray-500 text-xs">Release date:</p>
                  <p className="text-white text-sm">{games["released"]}</p>
                </div>
                <div className="flex flex-col  items-start pb-3 w-[100%] ">
                  <p className="text-gray-500 text-xs mb-1">Genres:</p>
                  <div className="flex w-[100%] break-all">
                    {games["genres"].map((genre, index) => {
                      return (
                        <p key={index} className="text-white text-sm text-left">
                          {genre["name"]}
                          {games["genres"].length === index + 1 ? "" : ","}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <p className="text-gray-500 text-xs">Rating:</p>
                  <p className="text-white text-sm">{games["rating"]}</p>
                </div>

                <div className=" flex justify-between items-center pb-2">
                  <p className="text-gray-500 text-sm">Playtime</p>
                  <p className="text-white text-xm">{games["playtime"]}</p>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <p className="text-gray-500 text-sm">Rating</p>
                  <p className="text-white text-xm">{games["rating"]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center ">
        {page <= 1 ? (
          <div />
        ) : (
          <div className="mr-2 mt-5 mb-3 flex text-white items-center justify-center w-[fit-content] p-1 px-3 self-center rounded-sm border-white border hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            <button
              className="outline-none focus:outline-none"
              onClick={() => router.push(`/?page=${page - 1}`)}
            >
              Previous
            </button>
          </div>
        )}

        {gamesData["next"] == null ? (
          <div></div>
        ) : (
          <div className="mt-5 mb-3 flex text-white items-center justify-center w-[fit-content] p-1 px-3 self-center rounded-sm border-white border hover:bg-white hover:text-black transition duration-300 cursor-pointer outline-none ">
            <button
              className="outline-none focus:outline-none"
              onClick={() => router.push(`/?page=${page + 1}`)}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div className=" flex items-stretch justify-center">
        <p className="text-gray-700 text-xs">Made by Dhruv Nakum</p>
      </div>
    </div>
  );
}
