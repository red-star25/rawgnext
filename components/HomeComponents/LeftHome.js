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

  var listOfSearchedGameSvg = {
    windows: (
      <svg
        class="h-4 w-4"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"
          fill="#FFF"
        ></path>
      </svg>
    ),
    ps5: (
      <svg
        class="h-4 w-4"
        viewBox="0 0 21 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
          fill="#FFF"
        ></path>
      </svg>
    ),

    xbox: (
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          fill="#FFF"
          d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"
        ></path>
      </svg>
    ),

    nintendo: (
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 16"
      >
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"
        ></path>
      </svg>
    ),

    ios: (
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11 18"
      >
        <path
          fill="#FFF"
          d="M9.538 0H1.651C.896 0 .287.587.287 1.31v15.368c0 .723.61 1.31 1.364 1.31h7.887c.754 0 1.364-.587 1.364-1.31V1.31c0-.723-.61-1.31-1.364-1.31zm-5.89.796h3.894c.098 0 .178.14.178.315 0 .174-.08.316-.178.316H3.648c-.099 0-.177-.142-.177-.316 0-.174.078-.315.177-.315zm1.947 15.898c-.48 0-.87-.375-.87-.836 0-.462.39-.835.87-.835s.87.373.87.835c0 .461-.39.836-.87.836zM9.88 13.83H1.31V2.21h8.57v11.62z"
        ></path>
      </svg>
    ),

    android: (
      <svg
        class="h-4 w-4"
        viewBox="0 0 16 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z"
          fill="#FFF"
        ></path>
      </svg>
    ),
  };

  var listOfSVG = {
    platformGamePad: (
      <svg
        class="h-5 w-5 group-hover:animate-bounce"
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
    ),
    platformStores: (
      <svg
        class="h-5 w-5 group-hover:animate-bounce"
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
    ),
    playStation: (
      <svg
        class="h-5 w-5 group-hover:animate-bounce"
        viewBox="0 0 21 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
          fill="#FFF"
        ></path>
      </svg>
    ),
    xbox: (
      <svg
        class="h-5 w-5 group-hover:animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          fill="#FFF"
          d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"
        ></path>
      </svg>
    ),
    showMore: (
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
    ),
    orderBy: (
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
    ),
    addedGames: (
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
    ),
    giftOptions: (
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
    ),
    viewMore: (
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
    ),
    gameAdd: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    star: (
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
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    collection: (
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
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
            {listOfSVG.platformGamePad}
            <h4 className="subheadings pl-3 ">Platforms</h4>
          </div>
          <div
            onClick={() => {
              router.push("/top/?title=stores");
            }}
            className="flex pb-4 cursor-pointer group"
          >
            {listOfSVG.platformStores}
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
            {listOfSearchedGameSvg.ps5}
            <h4 className="subheadings pl-3">PlayStation4</h4>
          </div>
          <div
            onClick={() => router.push("/?platforms=4&urlTitle=PC")}
            className="flex pb-3 cursor-pointer group"
          >
            {listOfSearchedGameSvg.xbox}
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
            {listOfPlatFormSvg.showMore}
            <h4 className="subheadings pl-3 text-gray-500 text-[15px]">
              Show all
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
