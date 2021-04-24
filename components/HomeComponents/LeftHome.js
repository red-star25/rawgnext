import { useRouter } from "next/router";
import {
  GiftIcon,
  CollectionIcon,
  UsersIcon,
  StarIcon,
  FireIcon,
  FastForwardIcon,
  CalendarIcon,
  TrendingUpIcon,
  ChartBarIcon,
  HashtagIcon,
  DeviceMobileIcon,
  DownloadIcon,
  FolderIcon,
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
        className="headings cursor-pointer hover:text-gray-400 transition duration-150"
      >
        Home
      </h1>

      <div className="flex-col">
        <div className="user__profile flex">
          <h1 className="headings cursor-default hover:text-gray-400 transition duration-150">
            Dhruv25
          </h1>
          <div className="flex items-center justify-center w-9 h-9 ml-3 rounded-full bg-purple-800 text-white font-bold text-lg">
            <h4>RS</h4>
          </div>
        </div>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => {
              router.push("/discover/Wishlist");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <GiftIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">Wishlist</h4>
          </div>
          <div
            onClick={() => {
              router.push("/discover/My-Library");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <CollectionIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">My Library</h4>
          </div>
          <div
            onClick={() => {
              router.push("/discover/Friends");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <UsersIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">People you follow</h4>
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
            className="flex pb-4 cursor-pointer"
          >
            <StarIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">Last 30 days</h4>
          </div>
          <div
            onClick={() => {
              var finalDate = getDate(7, { isNext: false });
              router.push(`/?page=1&date=${finalDate}`);
            }}
            className="flex pb-4 cursor-pointer"
          >
            <FireIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">This week</h4>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <h1 className="headings">Top</h1>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => {
              router.push("/developers");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">Developers</h4>
          </div>
          <div
            onClick={() => {
              router.push("/creators");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">Creators</h4>
          </div>
          <div
            onClick={() => {
              router.push("/tags");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">Tags</h4>
          </div>
          <div
            onClick={() => {
              router.push("/publishers");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <ChevronDoubleRightIcon className="h-6 w-6 text-white" />
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
            onClick={() => router.push("/platforms")}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="16"
              viewBox="0 0 22 16"
            >
              <path
                fill="#FFF"
                d="M21.535 6.966C20.455 2.123 18.934.928 18.008.45c-1.484-.767-3.204-.32-3.775-.031-.648.327-1.085.95-1.744 1.22-.761.31-1.796.395-2.575.02-.62-.3-1.168-.94-1.92-1.224-.952-.36-2.54-.865-4.11.238C3.512.933.864 3.11.068 9.904c-.491 4.19 1.854 5.539 1.768 5.478.604.423 1.955 1.14 3.786.018 1.223-.75 2.216-2.23 2.216-2.23s.443-.822 1.03-1.172c.416-.248 1.038-.06 1.038-.06h2.202s.699-.086 1.19.127c.476.203.745.706.745.706s1.451 1.837 2.842 2.773c.592.398 2.972.856 4.2-.614.803-.962 1.35-3.92.45-7.964zM9.773 6.537a.666.666 0 01-.667.666H7.438v1.668a.667.667 0 01-.666.667h-.5a.666.666 0 01-.667-.667V7.203h-1.67a.666.666 0 01-.666-.666v-.5c0-.368.299-.667.667-.667h1.668V3.705c0-.369.298-.668.667-.668h.5c.368 0 .667.299.667.668V5.37h1.668c.368 0 .667.298.667.667v.5zm4.698 2.333a1.25 1.25 0 11-.001-2.5 1.25 1.25 0 01.001 2.5zm2.293-2.776a1.237 1.237 0 110-2.473 1.237 1.237 0 010 2.473z"
              ></path>
            </svg>
            <h4 className="subheadings pl-3">Platforms</h4>
          </div>
          <div
            onClick={() => router.push("/stores")}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              viewBox="0 0 16 20"
            >
              <path
                fill="#FFF"
                d="M15.966 7.05h-4.558V0H4.57v7.05H.01l7.978 8.226 7.977-8.225zM.011 17.628v2.35h15.955v-2.35H.011z"
              ></path>
            </svg>
            <h4 className="subheadings pl-3">Stores</h4>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <h1 className="headings">Platforms</h1>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => router.push("/platforms/games?name=pc&page=1")}
            className="flex pb-4 cursor-pointer"
          >
            <DesktopComputerIcon className="h-6 w-6 text-white" />
            <h4 className="subheadings pl-3">PC</h4>
          </div>
          <div
            onClick={() =>
              router.push("/platforms/games?name=playstation&page=1")
            }
            className="flex pb-4 cursor-pointer"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 21 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
                fill="#FFF"
              ></path>
            </svg>
            <h4 className="subheadings pl-3">PlayStation4</h4>
          </div>
          <div
            onClick={() => router.push("/platforms/games?name=xbox&page=1")}
            className="flex pb-3 cursor-pointer"
          >
            <svg
              onClick={() => router.push("/platforms/games?name=xbox&page=1")}
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="#FFF"
                d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"
              ></path>
            </svg>
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
              router.push("/genres");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
            <h4 className="subheadings pl-3 text-gray-500 text-[15px]">
              Show all
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
