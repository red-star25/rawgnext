import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LeftHome from "../../components/HomeComponents/LeftHome";
import Image from "next/image";
import Controller from "../../controller/controller";

const GameDetails = ({ gamesList, id }) => {
  const router = useRouter();
  const [selectedGameData, setSelectedGameData] = useState();
  useEffect(() => {
    gamesList["results"].map((game) => {
      if (game["id"] === parseInt(id)) {
        setSelectedGameData(game);

        return;
      }
    });
  }, []);

  return (
    <div>
      <div className="w-[100%] bg-black px-5">
        <Header />
        <div className=" mt-10 w-[100%] h-[100%] flex ">
          <div className="w-[0%] hidden lg:flex lg:w-[22%]">
            <LeftHome />
          </div>
          {selectedGameData != null ? (
            <div className="w-[100%]  ml-4 lg:w-[78%]">
              <div className="w-[100%] h-[100%] flex flex-col md:flex-row">
                <div className="leftPart w-[100%] h-[fit-content] md:w-[50%]">
                  <div className="flex">
                    <p
                      onClick={() => {
                        router.push("/");
                      }}
                      className="text-[#596666] text-xs mx-1 hover:text-white transition duration-200 cursor-pointer"
                    >
                      HOME
                    </p>
                    <p className="text-[#596666] text-xs mx-1 ">/ GAMES /</p>
                    <p className="text-[#596666] text-xs mx-1">
                      {" "}
                      {name.toUpperCase()}
                    </p>
                  </div>
                  <div className="flex items-center mt-10">
                    {selectedGameData["parent_platforms"] != null ? (
                      selectedGameData["parent_platforms"].map(
                        (platform, idx) => {
                          return (
                            <div key={idx} className=" mr-4 text-white">
                              {platform["platform"]["name"] === "PC" ? (
                                Controller.listOfSearchedGameSvg[0]["svg"]
                              ) : platform["platform"]["name"] === "Xbox" ? (
                                Controller.listOfSearchedGameSvg[1]["svg"]
                              ) : platform["platform"]["name"] ===
                                "PlayStation" ? (
                                Controller.listOfSearchedGameSvg[2]["svg"]
                              ) : platform["platform"]["name"] ===
                                "Nintendo Switch" ? (
                                Controller.listOfSearchedGameSvg[3]["svg"]
                              ) : platform["platform"]["name"] === "iOS" ? (
                                Controller.listOfSearchedGameSvg[4]["svg"]
                              ) : platform["platform"]["name"] === "Android" ? (
                                Controller.listOfSearchedGameSvg[5]["svg"]
                              ) : (
                                <div />
                              )}
                            </div>
                          );
                        }
                      )
                    ) : (
                      <div />
                    )}
                    <div className="text-white text-sm tracking-wider">
                      AVERAGE PLAYTIME: {selectedGameData["playtime"]} HOURS
                    </div>
                  </div>
                  <div className="text-white text-7xl font-bold mt-12">
                    {selectedGameData["name"]}
                  </div>
                  <div className="flex flex-col mt-12 md:flex-row">
                    <div className="bg-[#161819] h-14 rounded-lg flex-1 flex items-center justify-between p-3 md:justify-around md:p-0">
                      <div>
                        <p className="text-[#626363] text-xs mb-1">Add to</p>
                        <div className="flex">
                          <p className="text-white text-sm mr-2">My games</p>
                          <p className="text-[#626363] text-sm">
                            {selectedGameData["added"] != null
                              ? selectedGameData["added"]
                              : ""}
                          </p>
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center ">
                        {Controller.listOfSVG.gameAdd}
                      </div>
                    </div>
                    <div className="bg-[#161819] h-14 rounded-lg flex-1 flex items-center justify-between p-3 md:justify-around md:p-0 md:mx-3">
                      <div>
                        <p className="text-[#626363] text-xs mb-1">Add to</p>
                        <div className="flex">
                          <p className="text-white text-sm mr-2">Ratings</p>
                          <p className="text-[#626363] text-sm">
                            {selectedGameData["rating"] != null
                              ? selectedGameData["rating"]
                              : ""}
                          </p>
                        </div>
                      </div>
                      <div className=" flex items-center justify-center text-black">
                        {Controller.listOfSVG.star}
                      </div>
                    </div>
                    <div className="bg-[#161819] h-14 rounded-lg flex-1 flex items-center justify-between p-3 md:justify-around md:p-0 md:mx-3">
                      <div>
                        <p className="text-[#626363] text-xs mb-1">Save to</p>

                        <p className="text-white text-sm mr-2">Collection</p>
                      </div>
                      <div className=" flex items-center justify-center">
                        {Controller.listOfSVG.collection}
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 flex">
                    <div className="flex flex-1 flex-col items-center">
                      <p className="text-white font-bold text-xl">
                        Exceptional
                      </p>
                      <p className="text-xs text-[#626363] mt-2">
                        {selectedGameData["ratings_count"] != null
                          ? selectedGameData["ratings_count"]
                          : ""}{" "}
                        RATINGS
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col items-center">
                      <p className="text-white text-xl font-bold">
                        #{" "}
                        {selectedGameData["reviews_count"] != null
                          ? selectedGameData["reviews_count"]
                          : ""}
                      </p>
                      <p className="text-xs text-[#626363] mt-2">
                        TOTAL RATINGS
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col items-center">
                      <p className="text-white text-xl font-bold">
                        #{" "}
                        {selectedGameData["metacritic"] != null
                          ? selectedGameData["metacritic"]
                          : ""}
                      </p>
                      <p className="text-xs text-[#626363] mt-2">METACRITC</p>
                    </div>
                  </div>
                  <div className="mt-12 flex flex-col">
                    <p className="text-[#626363] text-sm my-1">Ratings</p>
                    {selectedGameData["ratings"] != null ? (
                      <div className="flex  mt-2">
                        {selectedGameData["ratings"].map((rating, idx) => {
                          return (
                            <div
                              key={idx}
                              className="flex items-center  flex-col flex-1 md:justify-around"
                            >
                              <p className={`text-white  text-sm   `}>
                                {rating["title"][0].toUpperCase() +
                                  rating["title"].substr(
                                    1,
                                    rating["title"].length
                                  )}
                              </p>
                              <p className="text-[#626363] text-sm">
                                {rating["count"]}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="mt-12 flex">
                    <div className="flex flex-col flex-1">
                      <p className="text-lg text-[#626363]">Platforms</p>
                      <div className="flex flex-col">
                        {selectedGameData["platforms"] != null
                          ? selectedGameData["platforms"].map(
                              (platform, idx) => {
                                return (
                                  <p
                                    key={idx}
                                    className="text-white text-sm mt-1"
                                  >
                                    {platform["platform"]["name"]}
                                  </p>
                                );
                              }
                            )
                          : ""}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <p className="text-lg text-[#626363]">Genres</p>
                      <div className="flex flex-col">
                        {selectedGameData["genres"] != null
                          ? selectedGameData["genres"].map((genre, idx) => {
                              return (
                                <p
                                  className="text-white text-sm mt-1"
                                  key={idx}
                                >
                                  {genre["name"]}
                                </p>
                              );
                            })
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 flex">
                    <div className="flex flex-col flex-1">
                      <p className="text-lg text-[#626363]">ESRB Ratings</p>
                      <p className="text-white text-sm mt-1">
                        {selectedGameData["esrb_rating"] != null
                          ? selectedGameData["esrb_rating"]["name"]
                          : ""}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1">
                      <p className="text-lg text-[#626363]">Released</p>
                      <p className="text-white text-sm mt-1">
                        {selectedGameData["released"] != null
                          ? selectedGameData["released"]
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rightPart w-[100%] h-[fit-content] mt-5 flex flex-col md:ml-5 md:w-[50%] md:mt-0">
                  <p className="text-[#626363] text-2xl mb-5  ">Screenshots</p>
                  <div className="grid gap-x-5 w-[100%] grid-cols-2">
                    {selectedGameData["short_screenshots"].map((ss, idx) => {
                      return (
                        <div key={idx}>
                          <Image
                            className="rounded-xl"
                            src={ss["image"]}
                            width={500}
                            height={250}
                            quality={75}
                            objectFit="cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center mt-10">
                    <p className="text-[#626363] text-sm">
                      Last Modified: {selectedGameData["updated"]}
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-[#626363] text-lg">Where to buy</p>
                    <div className="grid grid-cols-2 gap-y-10 mt-5 gap-x-10 ">
                      {selectedGameData["stores"].map((store, idx) => {
                        return (
                          <p
                            key={idx}
                            className="bg-[#17191A] py-3 rounded-xl text-[#626363] text-base text-center"
                          >
                            {store["store"]["name"]}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-[100%] h-[100vh] bg-black">
              <p className="text-white text-4xl w-[60%] text-center">
                Sorry, we are not able to fetch the details...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query: { name, id } }) {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${name}`
  );
  const data = await res.json();
  return {
    props: { gamesList: data, id: id },
  };
}

export default GameDetails;
