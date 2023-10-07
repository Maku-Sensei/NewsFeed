import { useContext } from "react";
import Section from "./Context/Section";

const ButtonGroup = () => {
  const [selectedButtons, setSelectedButtons] = useContext(Section);
  const buttons = [
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
            selectedButtons.includes(buttonText)
              ? "bg-black text-white"
              : "bg-white"
          } `}
          style={{ width: "120px" }}
          onClick={(e) => {
            selectedButtons.includes(buttonText)
              ? setSelectedButtons([])
              : setSelectedButtons([buttonText]);
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
