import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Newsfeed from "./Newsfeed";
import IsAnyChecked from "./MainContent/Context/IsAnyChecked";
import { useState } from "react";
import IsPressed from "./MainContent/Context/IsPressed";
import TopNews from "./MainContent/Context/TopNews";
import IsSources from "./MainContent/Context/IsSources";
import Page from "./MainContent/Context/Page";
import store from "./store";
import { Provider } from "react-redux";
import "./ContentBox/Results/Movies&Shows/TMDB.css";
import Darkmode from "./Header/Darkmode";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const isAnyChecked = useState(false);
  const isPressed = useState(["USA", "Business"]);
  const topNews = useState(true);
  const isSources = useState(false);
  const page = useState(1);
  const darkmode = useState(true);

  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Darkmode.Provider value={darkmode}>
            <Provider store={store}>
              <IsAnyChecked.Provider value={isAnyChecked}>
                <IsPressed.Provider value={isPressed}>
                  <IsSources.Provider value={isSources}>
                    <TopNews.Provider value={topNews}>
                      <Page.Provider value={page}>
                        <Routes>
                          <Route path="/" element={<Newsfeed />} />
                        </Routes>
                      </Page.Provider>
                    </TopNews.Provider>
                  </IsSources.Provider>
                </IsPressed.Provider>
              </IsAnyChecked.Provider>
            </Provider>
          </Darkmode.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
