import { useContext } from "react";
import Section, { SectionType } from "./Context/Section";

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useContext(Section);
  const buttons: SectionType[] = [
    "U.S.",
    "World",
    "Business",
    "Technology",
    "Sports",
    "Job Market",
    "Your Money",
    "Washington",
  ];

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {buttons.map((buttonText) => (
        <button
          key={buttonText}
          className={`rounded-lg border-2 p-1 px-4 py-2 text-xxs ${
            selectedButton === buttonText ? "bg-black text-white" : "bg-white"
          } `}
          style={{ width: "120px" }}
          onClick={(e) => {
            selectedButton === buttonText
              ? setSelectedButton("")
              : setSelectedButton(buttonText);
            e.preventDefault();
          }}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
