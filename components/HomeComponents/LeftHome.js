import { useRouter } from "next/router";

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
      <h1 className="headings cursor-pointer hover:text-gray-400 transition duration-150">
        Reviews
      </h1>
      <div className="flex-col">
        <div className="user__profile flex">
          <h1 className="headings cursor-pointer hover:text-gray-400 transition duration-150">
            Dhruv25
          </h1>
          <div className="flex items-center justify-center w-9 h-9 ml-3 rounded-full bg-purple-800 cursor-pointer text-white font-bold text-lg">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
            <h4 className="subheadings pl-3">Wishlist</h4>
          </div>
          <div
            onClick={() => {
              router.push("/discover/My-Library");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <h4 className="subheadings pl-3">My Library</h4>
          </div>
          <div
            onClick={() => {
              router.push("/discover/Friends");
            }}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
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

              router.push(`/?page=1&date=${finalDate}`);
            }}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h4 className="subheadings pl-3">Last 30 days</h4>
          </div>
          <div
            onClick={() => {
              var finalDate = getDate(7, { isNext: false });
              router.push(`/?page=1&date=${finalDate}`);
            }}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path
                fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd"
              />
            </svg>
            <h4 className="subheadings pl-3">This week</h4>
          </div>
          <div
            onClick={() => {
              var finalDate = getDate(7, { isNext: true });
              router.push(`/?page=1&date=${finalDate}`);
            }}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
              />
            </svg>
            <h4 className="subheadings pl-3">Next week</h4>
          </div>
          <div className="flex pb-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            <h4 className="subheadings pl-3">Release calender</h4>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <h1 className="headings">Top</h1>
        <div className="user__sublist__menu pl-3">
          <div className="flex pb-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <h4 className="subheadings pl-3">Best of the year</h4>
          </div>
          <div className="flex pb-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <h4 className="subheadings pl-3">Popular in 2020</h4>
          </div>
          <div className="flex pb-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
            <h4 className="subheadings pl-3">All time top 250</h4>
          </div>
        </div>
      </div>
      <h1 className="headings w-auto">All Games</h1>
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
          <div className="flex pb-3">
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              viewBox="0 0 20 18"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M1.31 1.481c0-.106.087-.193.196-.193h5.605c.053 0 .103.02.14.057L8.454 2.53c.281.276.67.433 1.065.433h7.273c1.047 0 1.898.839 1.898 1.869v.192H4.91c-.83 0-1.505.666-1.505 1.483v10.205h-.197c-1.047 0-1.898-.839-1.898-1.869V1.481zm8.209.194a.199.199 0 01-.139-.057L8.177.434A1.508 1.508 0 007.111 0H1.506C.676 0 0 .664 0 1.481v13.362C0 16.584 1.44 18 3.208 18h13.584C18.56 18 20 16.584 20 14.843V4.832c0-1.74-1.44-3.157-3.208-3.157H9.519z"
              ></path>
            </svg>
            <h4 className="subheadings pl-3">Collections</h4>
          </div>
          <div className="flex pb-4 cursor-pointer">
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
      <div className="flex-col">
        <h1 className="headings">Platforms</h1>
        <div className="user__sublist__menu pl-3">
          <div
            onClick={() => router.push("/platforms/games?name=pc&page=1")}
            className="flex pb-4 cursor-pointer"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"
                fill="#FFF"
              ></path>
            </svg>
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
          <div className="flex pb-4 cursor-pointer">
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
          <div className="flex pb-4 cursor-pointer">
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
