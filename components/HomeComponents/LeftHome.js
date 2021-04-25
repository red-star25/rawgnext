import { useRouter } from "next/router";
import Controller from "../../controller/controller";
import {
  StarIcon,
  FireIcon,
  DesktopComputerIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";

export default function LeftHome() {
  const router = useRouter();

  const getDate = function (dateRequired, { isNext = false }) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    var date = new Date();
    if (isNext) date.setDate(date.getDate() + dateRequired);
    else date.setDate(date.getDate() - dateRequired);
    var dateFormat =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);

    return `${dateFormat},${today}`;
  };

  return (
    <div className="pl-3 pt-3">
      <h1
        onClick={() => {
          router.push("/");
        }}
        className="headings hover:animate-pulse cursor-pointer hover:text-[#626363] transition duration-150"
      >
        Home
      </h1>

      <div className="flex-col">
        <div className="user__profile flex">
          <h1 className="headings cursor-default hover:text-[#626363] hover:animate-pulse transition duration-150">
            Dhruv25
          </h1>
          <div className="flex items-center justify-center w-9 h-9 ml-3 rounded-full bg-purple-800 text-white font-bold text-lg">
            <h4>DN</h4>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <h1 className="headings w-auto">New Releases</h1>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => {
              var finalDate = getDate(30, { isNext: false });

              router.push(`/?date=${finalDate}`);
            }}
            className="flex pb-4 cursor-pointer group"
          >
            <StarIcon className="h-6 w-6 text-white group-hover:animate-bounce" />
            <h4 className="subheadings pl-3">Last 30 days</h4>
          </div>
          <div
            onClick={() => {
              var finalDate = getDate(7, { isNext: false });
              router.push(`/?page=1&date=${finalDate}`);
            }}
            className="flex pb-4 cursor-pointer group"
          >
            <FireIcon className="h-6 w-6 text-white group-hover:animate-bounce" />
            <h4 className="subheadings pl-3">This week</h4>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <h1 className="headings">Top</h1>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => {
              router.push("/top?title=developers");
            }}
            className="flex pb-4 cursor-pointer group"
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-white group-hover:animate-pulse" />
            <h4 className="subheadings pl-3">Developers</h4>
          </div>
          <div
            onClick={() => {
              router.push("/top?title=creators");
            }}
            className="flex pb-4 cursor-pointer group"
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-white group-hover:animate-pulse" />
            <h4 className="subheadings pl-3">Creators</h4>
          </div>
          <div
            onClick={() => {
              router.push("/top?title=tags");
            }}
            className="flex pb-4 cursor-pointer group"
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-white group-hover:animate-pulse" />
            <h4 className="subheadings pl-3">Tags</h4>
          </div>
          <div
            onClick={() => {
              router.push("/top/?title=publishers");
            }}
            className="flex pb-4 cursor-pointer group"
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-white group-hover:animate-pulse" />
            <h4 className="subheadings pl-3">Publishers</h4>
          </div>
        </div>
      </div>
      <h1
        onClick={() => {
          router.push("/");
        }}
        className="headings w-auto cursor-pointer"
      >
        All Games
      </h1>
      <div className="flex-col">
        <h1 className="headings">Browse</h1>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => {
              router.push("/top/?title=platforms");
            }}
            className="flex pb-4 cursor-pointer group"
          >
            {Controller.listOfSVG.platformGamePad}
            <h4 className="subheadings pl-3 ">Platforms</h4>
          </div>
          <div
            onClick={() => {
              router.push("/top/?title=stores");
            }}
            className="flex pb-4 cursor-pointer group"
          >
            {Controller.listOfSVG.platformStores}
            <h4 className="subheadings pl-3">Stores</h4>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <h1 className="headings">Platforms</h1>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => router.push("/?platforms=3&urlTitle=PC")}
            className="flex pb-4 cursor-pointer group"
          >
            <DesktopComputerIcon className="h-6 w-6 text-white group-hover:animate-bounce" />
            <h4 className="subheadings pl-3">PC</h4>
          </div>
          <div
            onClick={() => router.push("/?platforms=1&urlTitle=PC")}
            className="flex pb-4 cursor-pointer group"
          >
            {Controller.listOfSVG.playStation}
            <h4 className="subheadings pl-3">PlayStation4</h4>
          </div>
          <div
            onClick={() => router.push("/?platforms=4&urlTitle=PC")}
            className="flex pb-3 cursor-pointer group"
          >
            {Controller.listOfSVG.xbox}
            <h4 className="subheadings pl-3">Xbox One</h4>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <h1 className="headings">Genres</h1>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => router.push("/?genres=action")}
            className="flex pb-4 cursor-pointer"
          >
            <img
              className="w-7 h-7 rounded-md object-cover"
              src="https://i.ytimg.com/vi/47TkcN6GKv4/maxresdefault.jpg"
              alt=""
            />
            <h4 className="subheadings pl-3">Action</h4>
          </div>
          <div
            onClick={() => router.push("/?genres=strategy")}
            className="flex pb-4 cursor-pointer"
          >
            <img
              className="w-7 h-7 rounded-md object-cover"
              src="https://i.ytimg.com/vi/4LCYYsmBJlU/maxresdefault.jpg"
              alt=""
            />
            <h4 className="subheadings pl-3">Strategy</h4>
          </div>
          <div
            onClick={() => router.push("/?genres=indie")}
            className="flex pb-3 cursor-pointer"
          >
            <img
              className="w-7 h-7 rounded-md object-cover"
              src="https://www.gamebyte.com/wp-content/uploads/2018/07/rpg-1.jpg"
              alt=""
            />
            <h4 className="subheadings pl-3">Indie</h4>
          </div>
          <div
            onClick={() => {
              router.push("/top?title=genres");
            }}
            className="flex pb-4 cursor-pointer"
          >
            {Controller.listOfSVG.showMore}
            <h4 className="subheadings pl-3 text-gray-500 text-[15px]">
              Show all
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
