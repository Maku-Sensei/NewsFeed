export const handleCountryChange = (
  onParamsChange,
  event,
  params,
  setSelectedButtons,
) => {
  event.preventDefault();
  const newCountry = event.target.value;
  onParamsChange({
    country: newCountry,
    sources: "",
    category: params.category,
    q: "",
  });
  if (params.category === "business") {
    switch (newCountry) {
      case "us":
        setSelectedButtons(["Business", "USA"]);
        break;
      default:
        setSelectedButtons(["Business"]);
    }
  } else {
    newCountry === "us" ? setSelectedButtons(["USA"]) : setSelectedButtons([]);
  }
};
export const handleCategoryChange = (
  onParamsChange,
  event,
  params,
  setSelectedButtons,
) => {
  event.preventDefault();
  const newCategory = event.target.value;
  onParamsChange({
    category: newCategory,
    sources: "",
    country: params.country,
    q: "",
  });
  if (newCategory === "business") {
    switch (params.country) {
      case "us":
        setSelectedButtons(["Business", "USA"]);
        break;
      default:
        setSelectedButtons(["Business"]);
    }
  } else {
    newCategory === "business"
      ? setSelectedButtons(["Business"])
      : setSelectedButtons([]);
  }
};
export const handleSourcesChange = (
  onParamsChange,
  event,
  setSelectedButtons,
) => {
  event.preventDefault();
  if (event.target.value === "") {
    return;
  }
  const newSource = event.target.value;
  onParamsChange({ country: "", sources: newSource, category: "", q: "" });
  switch (newSource) {
    case "google-news":
      setSelectedButtons(["Google News"]);
      break;
    case "the-wall-street-journal":
      setSelectedButtons(["WSJ"]);
      break;
    default:
      setSelectedButtons([]);
  }
};

export const handleEnterDown = (
  onParamsChange,
  event,
  setIsTopNews,
  setShowAllNews,
  setSelectedButtons,
) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const newQ = event.target.value;
    onParamsChange({ country: "", sources: "", category: "", q: newQ });
    setIsTopNews(false);
    setShowAllNews(true);
    setSelectedButtons([]);
  }
};
