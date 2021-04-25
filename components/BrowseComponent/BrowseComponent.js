import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BrowseComponent({ data, page, urlTitle }) {
  const size = useWindowSize();
  const [title, setTitle] = useState("");

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

  const router = useRouter();

  useEffect(() => {
    var temp = `${urlTitle[0].toUpperCase()}${urlTitle.substr(
      1,
      urlTitle.length
    )}`;
    setTitle(temp);
  }, [urlTitle]);

  return (
    <div>
      <div className="hidden md:block mb-5">
        <h1 className=" text-white text-6xl font-bold ">{title}</h1>
      </div>
      <div className="flex flex-col mb-5 items-center justify-center md:hidden">
        <h1 className=" text-white text-4xl font-bold ">{title}</h1>
      </div>

      <div
        className={`w-[100%] grid ${
          size.width >= 1024
            ? "grid-cols-4"
            : size.width >= 768
            ? "grid-cols-3"
            : size.width >= 460
            ? "grid-cols-2"
            : "100%"
        }`}
      >
        {data["results"].map((items, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                switch (title) {
                  case "Tags":
                    router.push(`/?tags=${items["slug"]}&urlTitle=tags`);
                    break;
                  case "Creators":
                    router.push(
                      `/?creators=${items["slug"]}&urlTitle=creators`
                    );
                    break;
                  case "Developers":
                    router.push(
                      `/?developers=${items["slug"]}&urlTitle=developers`
                    );
                    break;
                  case "Publishers":
                    router.push(
                      `/?publishers=${items["slug"]}&urlTitle=publishers`
                    );
                    break;
                  case "Genres":
                    router.push(`/?genres=${items["slug"]}&urlTitle=genres`);
                    break;
                }
              }}
              key={index}
              className="cursor-pointer sm:w-[fit-content] h-[fit-content] rounded-xl pb-5 hover:scale-105 transform transition duration-200  m-1  "
            >
              {items["image_background"] != null ? (
                <div className="bg-gradient-to-t from-[#212121] z-50">
                  <Image
                    width={400}
                    height={320}
                    quality={75}
                    src={items["image_background"]}
                    className="rounded-xl w-[100%] z-[-50]"
                    objectFit="cover"
                  />
                </div>
              ) : (
                <div className="w-[270px] h-[210px] rounded-xl"></div>
              )}
              <div className=" w-[100%]   absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] m-auto  flex items-center justify-center flex-col">
                <p className="text-white text-xl font-bold">{items["name"]}</p>
                <div className="mt-2 text-white">Follow</div>
                <div className="mt-2 w-[100%]">
                  <div className="flex justify-between mx-4 mb-4">
                    <p className="text-white text-xs font-bold">
                      Popular items
                    </p>
                    <p className="text-[#626363] text-sm">
                      {items["games_count"]}
                    </p>
                  </div>
                  <div className="flex justify-between mx-4 flex-col">
                    {items["games"].map(
                      (game, idx) =>
                        idx < 3 && ( // <= only 5 items
                          <div className="flex justify-between">
                            <p className="text-white text-xs ">
                              {game["name"]}
                            </p>
                            <p className="text-[#626363] text-sm">
                              {game["added"]}
                            </p>
                          </div>
                        )
                    )}
                  </div>
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
              onClick={() =>
                router.push(`/top?page=${page - 1}&title=${urlTitle}`)
              }
            >
              Previous
            </button>
          </div>
        )}

        {data["next"] == null ? (
          <div></div>
        ) : (
          <div className="mt-5 mb-3 flex text-white items-center justify-center w-[fit-content] p-1 px-3 self-center rounded-sm border-white border hover:bg-white hover:text-black transition duration-300 cursor-pointer outline-none ">
            <button
              className="outline-none focus:outline-none"
              onClick={() =>
                router.push(`/top?page=${page + 1}&title=${urlTitle}`)
              }
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
