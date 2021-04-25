export default class Controller {
  static onMouseHover = (id) => {
    if (document.getElementById(`${id}`).classList.contains("hidden")) {
      document.getElementById(`${id}`).classList.remove("hidden");
      document.getElementById(`${id}`).classList.add("absolute");
      document.getElementById(`${id}`).classList.add("top-0");
      document.getElementById(`${id}`).classList.add("left-0");
      document.getElementById(`${id}`).classList.add("flex-col");
      document.getElementById(`${id}`).classList.add("flex");
    }
  };
  static onMouseHoverLeave = (id) => {
    if (!document.getElementById(`${id}`).classList.contains("hidden")) {
      document.getElementById(`${id}`).classList.add("hidden");
    }
  };
}
