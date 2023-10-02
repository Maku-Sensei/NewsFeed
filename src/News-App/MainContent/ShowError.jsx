import React from "react";
import { useContext } from "react";
import Options from "./Options";
import Modal from "./Modal";
import IsPressed from "./Context/IsPressed";
import IsAnyChecked from "./Context/IsAnyChecked";
import ContentBox from "../ContentBox/ContentBox";
import Results from "./Results";

const ShowError = ({ setRequestParams, requestParams, changeParams }) => {
  const [isPressed, setIsPressed] = useContext(IsPressed);
  const [showAllNews, setShowAllNews] = useContext(IsAnyChecked);
  const changeToInitialParams = () => {
    setRequestParams({
      country: "us",
      category: "business",
      sources: "",
      q: "",
    });
    setShowAllNews(true);
    setIsPressed(["USA", "Business"]);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="text-center font-serif"> Newsfeed</h1>
      {/*Selectable Options*/}
      <div className="container">
        {/*className="col-span-2 mb-10 mt-2 flex flex-col items-center justify-center"*/}
        <section id="options">
          <Options onParamsChange={changeParams} params={requestParams} />
        </section>

        {/*Content*/}
        {/*className="flex flex-row justify-around"*/}

        <section id="content-box">
          <ContentBox />
        </section>

        {/*  <section id="main-news">
          <Results news={data} />
        </section>
        <section id="market-movers">
          <h1> Market Movers</h1>
        </section> */}
      </div>

      <Modal>
        <h1 className="modal-h1"> You have not selected anything</h1>
        <h1 className="modal-h1"> Press the Button to return </h1>
        <div className="buttons">
          <button onClick={() => changeToInitialParams()}>Close</button>
        </div>
      </Modal>
    </form>
  );
};
export default ShowError;
