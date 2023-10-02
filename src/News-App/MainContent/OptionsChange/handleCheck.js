export function handleCheck(DOMElement, setChecked, isChecked, searchElement) {
  if (!isChecked) {
    DOMElement.forEach((element) => {
      element.setAttribute("disabled", "true");
    });
    searchElement.setAttribute("placeholder", "Press Enter to search any news");
    setChecked(true); //this is the problem line
  } else {
    DOMElement.forEach((element) => {
      element.removeAttribute("disabled");
    });
    searchElement.setAttribute("placeholder", "Press Enter to search top news");
    setChecked(false);
  }
}
