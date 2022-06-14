import '../css/app.scss';
import {Dropdown} from "bootstrap";

document.addEventListener("DOMContentLoaded", () => {
    enabledropdowns();
  });
const enabledropdowns = () => {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    dropdownElementList.map(function (dropdownToggleEl){
    new Dropdown(dropdownToggleEl)
});
}
