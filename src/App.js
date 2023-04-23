import Header from "./components/Header";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import Fullview from "./components/Fullview";
import MostSearchedBreed from "./components/MostSearchedBreeds";
import NotFound from "./components/NotFound";

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
          errorElement={<NotFound message="Please refresh this page or go back and try again"/>}
        >
          <Route
            index
            element={
              <>
                <Header />
                <Catalog />
              </>
            }
            errorElement={<NotFound message="Please refresh this page or go back and try again" />}
          />
          <Route path="breed" element={<Fullview />} errorElement={<NotFound message="Please refresh this page or go back and try again" />} caseSensitive />
          <Route path="mostSearched" element={<MostSearchedBreed />} errorElement={<NotFound message="Please refresh this page or go back and try again" />}  caseSensitive />
          <Route path="*" element={<NotFound message="Please refresh this page or go back and try again"/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
