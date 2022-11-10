import config from "data/config.json";
import { CSSReset } from "components/CSSreset";
import Menu from "components/Menu/index";
import Timeline from "components/Timeline";
import React, { useState } from "react";
import Header from "components/Header";
import Favorites from "components/Favorites";
import Head from "next/head";
import SearchContext from "SearchContext";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Head>
        <title>Home - AluraTube</title>
      </Head>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <SearchContext.Provider value={{search, setSearch}}>
          <Menu />
          <Header />
          <Timeline playlists={config.playlists} search={search}>
            Conteúdo
          </Timeline>
        </SearchContext.Provider>
        <Favorites />
      </div>
    </>
  );
}

export default HomePage;
