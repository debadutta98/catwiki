import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route, NavLink } from "react-router-dom";
import Catalog from "./components/Catalog";
import Fullview from "./components/Fullview";
import MostSearchedBreed from "./components/MostSearchedBreeds";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
            </>
          }
        >
          <Route
            index
            element={
              <>
                <Header />
                <Catalog />
              </>
            }
          />
          <Route path="view/:breed" element={<Fullview />} />
          <Route path="mostSearched" element={<MostSearchedBreed />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
