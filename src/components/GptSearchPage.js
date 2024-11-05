import React from "react";
import GptSearch from "./GptSearch";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
  return (
    <div className="bg-loginPageBg min-h-screen">
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
