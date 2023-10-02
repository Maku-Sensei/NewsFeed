import React from "react";
import { useContext } from "react";
import IsAnyChecked from "./Context/IsAnyChecked";
import hasCommonElements from "../../general methods/hasCommonElements";
import isPressed from "./Context/IsPressed";
import TopNews from "./Context/TopNews";
import toggleButton from "./OptionsChange/toggleButton";
import IsSources from "./Context/IsSources";

const ButtonGroup = ({ params, setParams, input }) => {
  const [showAllNews, setShowAllNews] = useContext(IsAnyChecked);
  const [selectedButtons, setSelectedButtons] = useContext(isPressed);
  const [isTopNews, setIsTopNews] = useContext(TopNews);
  const [isSources, setSources] = useContext(IsSources);

  const buttonSources = ["Google News", "WSJ"];
  const buttonCountry = ["USA"];
  const buttonCategory = ["Business", "Technology"];

  const buttons = [
    "Top Headlines",
    "Google News",
    "USA",
    "Business",
    "WSJ",
    "Technology",
  ];

  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      {buttons.map((buttonText, index) => (
        <button
          key={index}
          disabled={buttonText === "Top Headlines" && isTopNews}
          className={`rounded-lg border-2 p-1 px-4 py-2 text-xxs ${
            selectedButtons.includes(buttonText)
              ? "bg-black text-white"
              : "bg-white"
          } ${
            buttonText === "Top Headlines" && isTopNews
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          style={{ width: "120px" }}
          onClick={(e) => {
            e.preventDefault();
            toggleButton(
              buttonText,
              selectedButtons,
              setSelectedButtons,
              buttonSources,
              buttonCategory,
              buttonCountry,
              params,
              setParams,
              hasCommonElements,
              setShowAllNews,
              setSources,
              setIsTopNews,
            );
            input.value = "";
          }}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
