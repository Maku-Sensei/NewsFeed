const toggleButton = (
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
) => {
  //UNCLICKING
  //normal deselect
  if (selectedButtons.includes(buttonText)) {
    setSelectedButtons(
      selectedButtons.filter((button) => button !== buttonText),
    );
    //sources deselect
    if (buttonSources.includes(buttonText)) {
      setParams({ country: "", sources: "", category: "", q: "" });
    }
    //country deselect
    else if (buttonCountry.includes(buttonText)) {
      setParams({
        country: "",
        sources: "",
        category: params.category,
        q: "",
      });
      setSources(false);
      //category deselect
    } else if (buttonCategory.includes(buttonText)) {
      setParams({
        country: params.country,
        sources: "",
        category: "",
        q: "",
      });
      setSources(false);
    }
    if (buttonText === "Top Headlines") {
      setShowAllNews(true);
      setIsTopNews(false);
    } else {
      setShowAllNews(false);
      setIsTopNews(true);
    }

    //TOGGLE
  } else {
    if (selectedButtons.includes("Top Headlines")) {
      setSelectedButtons([buttonText]);
      let isCategory = buttonCategory.includes(buttonText);
      let isCountry = buttonCountry.includes(buttonText);
      let isSource = buttonSources.includes(buttonText);

      if (isCategory) {
        setParams({
          country: "",
          sources: "",
          category: buttonText.toLowerCase(),
          q: "",
        });
        setSources(false);
      } else if (isCountry) {
        setParams({
          country: "us",
          sources: "",
          category: "",
          q: "",
        });
        setSources(false);
      } else if (isSource) {
        let source;
        switch (buttonText) {
          case "Google News":
            source = "google-news";
            break;
          case "WSJ":
            source = "the-wall-street-journal";
            break;
          default:
            source = "";
            setSources(true);
        }
        setParams({
          country: "",
          sources: source,
          category: "",
          q: "",
        });
      }
    } else {
      //Sources toggle
      if (buttonSources.includes(buttonText)) {
        let source;
        switch (buttonText) {
          case "Google News":
            source = "google-news";
            break;
          case "WSJ":
            source = "the-wall-street-journal";
            break;
          default:
            source = "";
        }
        setParams({
          country: "",
          sources: source,
          category: "",
        });
        setSources(true);
        setSelectedButtons([buttonText]);
      } else {
        //if a source is already selected
        if (hasCommonElements(selectedButtons, buttonSources)) {
          setSelectedButtons([buttonText]);
        }
        //if a category is already selected
        else if (hasCommonElements(selectedButtons, buttonCategory)) {
          if (buttonCategory.includes(buttonText)) {
            setSelectedButtons([
              ...selectedButtons.filter(
                (button) => !buttonCategory.includes(button),
              ),
              buttonText,
            ]);
          } else {
            setSelectedButtons([...selectedButtons, buttonText]);
          }
        }
        //We only have one country, so check not needed
        else {
          setSelectedButtons([...selectedButtons, buttonText]);
        }

        //Country toggle
        if (buttonCountry.includes(buttonText)) {
          setParams({
            country: "us",
            sources: "",
            category: params.category,
            q: "",
          });
          setSources(false);
        }
        //Category toggle
        else if (buttonCategory.includes(buttonText)) {
          setParams({
            country: params.country,
            sources: "",
            category: buttonText.toLowerCase(),
            q: "",
          });
          setSources(false);
        }
      }
      if (buttonText === "Top Headlines") {
        setIsTopNews(false);
      } else {
        setIsTopNews(true);
      }
      selectedButtons.filter((button) => button !== "Top Headlines");
      //Top News deselect, since pressing other buttons also leads to deselection
    }
    setShowAllNews(false);
  }
};

export default toggleButton;
