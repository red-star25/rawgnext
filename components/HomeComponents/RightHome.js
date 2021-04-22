import StackGrid from "react-stack-grid";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function RightHome({ gamesData, page }) {
  const size = useWindowSize();

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

  var listOfPlatFormSvg = [
    <svg
      class="h-3 w-3 "
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"
        fill="#FFF"
      ></path>
    </svg>,
    <svg class="h-3 w-3" viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
        fill="#FFF"
      ></path>
    </svg>,
    <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fill="#FFF"
        d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"
      ></path>
    </svg>,
    <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
      <path
        fill="#FFF"
        fill-rule="evenodd"
        d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"
      ></path>
    </svg>,
    <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18">
      <path
        fill="#FFF"
        d="M9.538 0H1.651C.896 0 .287.587.287 1.31v15.368c0 .723.61 1.31 1.364 1.31h7.887c.754 0 1.364-.587 1.364-1.31V1.31c0-.723-.61-1.31-1.364-1.31zm-5.89.796h3.894c.098 0 .178.14.178.315 0 .174-.08.316-.178.316H3.648c-.099 0-.177-.142-.177-.316 0-.174.078-.315.177-.315zm1.947 15.898c-.48 0-.87-.375-.87-.836 0-.462.39-.835.87-.835s.87.373.87.835c0 .461-.39.836-.87.836zM9.88 13.83H1.31V2.21h8.57v11.62z"
      ></path>
    </svg>,
    <svg class="h-3 w-3" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z"
        fill="#FFF"
      ></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3">
      <path
        fill="#ffffff"
        id="svg_4"
        d="m456.09361,391.87609c-10.84,10.52 -22.8,8.88 -34.2,3.92c-12.12,-5.06 -23.2,-5.38 -36,0c-15.94,6.88 -24.4,4.88 -34,-3.92c-54.2,-55.8 -46.2,-140.8 15.4,-144c14.94,0.8 25.4,8.26 34.2,8.88c13.08,-2.66 25.6,-10.28 39.6,-9.28c16.82,1.36 29.4,8 37.8,19.94c-34.6,20.8 -26.4,66.4 5.38,79.2c-6.36,16.7 -14.52,33.2 -28.2,45.4l0.02,-0.14zm-55.8,-144.6c-1.62,-24.8 18.48,-45.2 41.6,-47.2c3.18,28.6 -26,50 -41.6,47.2z"
      />
    </svg>,
  ];

  const router = useRouter();

  const onMouseHover = (id) => {
    if (document.getElementById(`${id}`).classList.contains("hidden")) {
      document.getElementById(`${id}`).classList.remove("hidden");
      document.getElementById(`${id}`).classList.add("absolute");
      document.getElementById(`${id}`).classList.add("top-0");
      document.getElementById(`${id}`).classList.add("left-0");
      document.getElementById(`${id}`).classList.add("flex-col");
      document.getElementById(`${id}`).classList.add("flex");
      document.getElementById(`${id}`).classList.add("item-center");
      document.getElementById(`${id}`).classList.add("justify-center");
    }
  };
  const onMouseHoverLeave = (id) => {
    if (!document.getElementById(`${id}`).classList.contains("hidden")) {
      document.getElementById(`${id}`).classList.add("hidden");
    }
  };
  return (
    <div>
      <div className="hidden md:block">
        <h1 className=" text-white text-6xl font-bold ">New and Trending</h1>
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
      <div className="w-[100%]">
        <StackGrid
          className="mt-3"
          columnWidth={
            size.width >= 1024
              ? "25%"
              : size.width >= 768
              ? "33.3%"
              : size.width >= 460
              ? "50%"
              : "100%"
          }
          gutterHeight={10}
        >
          {gamesData["results"].map((games, index) => {
            return (
              <div
                onMouseOver={() => onMouseHover(games["id"])}
                onMouseOut={() => onMouseHoverLeave(games["id"])}
                className="pointer-events-none sm:pointer-events-auto bg-[#181A1B] sm:w-[fit-content] h-[fit-content] rounded-xl pb-5  hover:scale-105 transform transition duration-200 relative m-1"
              >
                <Image
                  className="rounded-xl"
                  src={games["background_image"]}
                  width={400}
                  height={150}
                  quality={75}
                  objectFit="cover"
                />
                <div className="flex pl-3 items-center justify-between mx-2">
                  <div className="flex  w-[80%] overflow-hidden">
                    {games["parent_platforms"] != null ? (
                      games["parent_platforms"].map((platform, idx) => {
                        return (
                          <div key={idx} className="mr-3 mt-3 text-white">
                            {platform["platform"]["name"] === "PC" ? (
                              listOfPlatFormSvg[0]
                            ) : platform["platform"]["name"] === "Xbox" ? (
                              listOfPlatFormSvg[1]
                            ) : platform["platform"]["name"] ===
                              "PlayStation" ? (
                              listOfPlatFormSvg[2]
                            ) : platform["platform"]["name"] ===
                              "Nintendo Switch" ? (
                              listOfPlatFormSvg[3]
                            ) : platform["platform"]["name"] === "iOS" ? (
                              listOfPlatFormSvg[4]
                            ) : platform["platform"]["name"] === "Android" ? (
                              listOfPlatFormSvg[5]
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
                  <div>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mx-2 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <p className="text-white text-sm">{games["added"]}</p>
                  </div>
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
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
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" pt-2 flex items-center justify-center">
                  <p
                    onClick={() => {
                      onMouseHover(games["id"]);
                    }}
                    className="pointer-events-auto text-white text-xs sm:hidden"
                  >
                    View more
                  </p>
                </div>
                <div
                  id={games["id"]}
                  className="hidden extraOnHoverInfo pb-2 px-2 pt-4 bg-[#181A1B] w-[100%] rounded-xl h-full 
            "
                >
                  <div className="flex justify-between items-center pb-6 ">
                    <p className="text-gray-500 text-xs">Release date:</p>
                    <p className="text-white text-sm">{games["released"]}</p>
                  </div>
                  <div className="flex flex-col  items-start pb-6 w-[100%] ">
                    <p className="text-gray-500 text-xs mb-1">Genres:</p>
                    <div className="flex w-[100%] break-all">
                      {games["genres"].map((genre, index) => {
                        return (
                          <p className="text-white text-sm text-left">
                            {genre["name"]}
                            {games["genres"].length === index + 1 ? "" : ","}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-6">
                    <p className="text-gray-500 text-xs">Rating:</p>
                    <p className="text-white text-sm">{games["rating"]}</p>
                  </div>
                  <div className=" pt-2 flex items-center justify-center">
                    <p
                      onClick={() => {
                        onMouseHoverLeave(games["id"]);
                      }}
                      className="pointer-events-auto text-white text-xs sm:hidden"
                    >
                      View less
                    </p>
                  </div>
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-white text-sm">Show more like this</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#606060"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-2">
                    <p className="text-white text-sm">Hide this game</p>
                  </div>
                </div>
              </div>
            );
          })}
        </StackGrid>
      </div>
      <div className="flex items-center ">
        {page <= 1 ? (
          <div />
        ) : (
          <div className="mr-2 mt-5 mb-3 flex text-white items-center justify-center w-[fit-content] p-1 px-3 self-center rounded-sm border-white border hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            <button
              className="outline-none focus:outline-none"
              onClick={() => router.push(`/home?page=${page - 1}`)}
            >
              Previous
            </button>
          </div>
        )}

        <div className="mt-5 mb-3 flex text-white items-center justify-center w-[fit-content] p-1 px-3 self-center rounded-sm border-white border hover:bg-white hover:text-black transition duration-300 cursor-pointer outline-none ">
          <button
            className="outline-none focus:outline-none"
            onClick={() => router.push(`/home?page=${page + 1}`)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
