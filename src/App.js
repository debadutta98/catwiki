import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import Fullview from "./components/Fullview";
import MostSearchedBreed from "./components/MostSearchedBreeds";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout />
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
          <Route path="breed/:breedId/:imageId" element={<Fullview />} />
          <Route path="mostSearched" element={<MostSearchedBreed />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
