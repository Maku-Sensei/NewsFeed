import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Newsfeed from "./Newsfeed";

import { useState } from "react";
import Section from "./MainContent/Context/Section";

import Page from "./MainContent/Context/Page";
import store from "./store";
import { Provider } from "react-redux";
import "./ContentBox/Results/Movies&Shows/TMDB.css";
import Darkmode from "./Header/Darkmode";
import NewsQuery from "./MainContent/Context/NewsQuery";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const section = useState("");
  const page = useState(1);
  const darkmode = useState(true);
  const newsQuery = useState("");

  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Darkmode.Provider value={darkmode}>
            <NewsQuery.Provider value={newsQuery}>
              <Provider store={store}>
                <Section.Provider value={section}>
                  <Page.Provider value={page}>
                    <Routes>
                      <Route path="/" element={<Newsfeed />} />
                    </Routes>
                  </Page.Provider>
                </Section.Provider>
              </Provider>
            </NewsQuery.Provider>
          </Darkmode.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.querySelector("#root");
if (!container) throw new Error("No root element found");
const root = createRoot(container);
root.render(<App />);
