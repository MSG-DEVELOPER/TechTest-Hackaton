import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/homepage/HomePage";
import DetailsPage from "./pages/detailspage/DetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path="details" element = {<DetailsPage/>}></Route>
        </Route>
      </Routes>
     
    </>
  );
}

export default App;
